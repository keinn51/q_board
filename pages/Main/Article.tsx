import '@css/Main/Article.css';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { getAuth } from '@cert/AuthStorage';
import { AuthStorageType } from '@globalObj/types';

const Article = (props: { articleId: number | null }) => {
  const { articleId } = props;
  const [articleObj, setArticleObj] = useState(null);
  const [articleContent, setArticleContent] = useState('');

  const getArticleInfo = () => {
    axios
      .get(`http://${process.env.IP_ADDRESS}/board/get_article.php?boardId=${articleId}`)
      .then((res) => {
        // console.log(res.data);
        setArticleObj(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postComment = () => {
    if (getAuth()) {
      axios
        .post(`http://${process.env.IP_ADDRESS}/comment/post_comment.php`, {
          boardId: articleId,
          userId: (getAuth() as AuthStorageType)['userId'],
          loginId: (getAuth() as AuthStorageType)['loginId'],
          content: articleContent,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    getArticleInfo();
  }, []);

  return articleObj ? (
    <>
      <div>
        <div className="article-title">{articleObj['title']}</div>
        <div className="article-writter">
          <span>{articleObj['loginId']}</span>
          <span>2일 전</span>
        </div>
        <div className="article-content">
          <span>{articleObj['content']}</span>
        </div>
        <div className="article-comment_box">
          <div className="article-comment_count">100개의 댓글</div>
          <textarea
            className={`article-comment_textarea`}
            onChange={(e) => setArticleContent(e.target.value)}
            cols={100}
            rows={10}
            placeholder="글을 작성해주세요"
          />
          <div className="article-comment_btn">
            <div className="button" onClick={postComment}>
              입력
            </div>
          </div>
        </div>
        <div className="article-comments">
          <div className="article-comments-profile">
            <div className="article-comments-profile-name">고등어통조림</div>
            <div>1일전</div>
          </div>
          <div className="article-comments-comment">
            <span>사용자가 원하는 것과 운영자의 생각(신념)에 괴리감이 있군요 안타까운 일입니다</span>
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default Article;

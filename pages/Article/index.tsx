import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { getAuth } from '@cert/AuthStorage';
import { AuthStorageType } from '@globalObj/types';
import '@css/Article/Article.css';
import { useParams } from 'react-router';

const Article = () => {
  const { articleId } = useParams();
  const [articleObj, setArticleObj] = useState(null);
  const [commentsArr, setCommentsArr] = useState([]);
  const [articleContent, setArticleContent] = useState('');

  const getArticleInfo = () => {
    axios
      .get(`http://${process.env.IP_ADDRESS}/board/get_article.php?boardId=${articleId}`)
      .then((res) => {
        setArticleObj(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCommentsInfo = () => {
    axios
      .get(`http://${process.env.IP_ADDRESS}/comment/get_comments.php?boardId=${articleId}`)
      .then((res) => {
        console.log(res.data);
        setCommentsArr(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postComment = () => {
    if (getAuth() && articleId) {
      axios
        .post(`http://${process.env.IP_ADDRESS}/comment/post_comment.php`, {
          boardId: parseInt(articleId, 10),
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
    getCommentsInfo();
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
        {commentsArr.length
          ? commentsArr.map((commentsObj) => (
              <div key={commentsObj['commentId']} className="article-comments">
                <div className="article-comments-profile">
                  <div className="article-comments-profile-name">{commentsObj['loginId']}</div>
                  <div>1일전</div>
                </div>
                <div className="article-comments-comment">
                  <span>{commentsObj['content']}</span>
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  ) : null;
};

export default Article;

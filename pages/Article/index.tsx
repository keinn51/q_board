import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { getAuth } from '@cert/AuthStorage';
import { AuthStorageType } from '@globalObj/types';
import '@css/Article/Article.css';
import { useNavigate, useParams } from 'react-router';

const Article = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
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
        alert(error.response.data);
      });
  };

  const getCommentsInfo = () => {
    axios
      .get(`http://${process.env.IP_ADDRESS}/comment/get_comments.php?boardId=${articleId}`)
      .then((res) => {
        setCommentsArr(res.data);
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };

  const postComment = () => {
    if (getAuth() && articleId) {
      axios
        .post(`http://${process.env.IP_ADDRESS}/comment/post_comment.php`, {
          boardId: parseInt(articleId, 10),
          loginId: (getAuth() as AuthStorageType)['loginId'],
          userId: (getAuth() as AuthStorageType)['userId'],
          content: articleContent,
        })
        .then(() => {
          alert('댓글 달기 성공');
          getCommentsInfo();
        })
        .catch((error) => {
          alert(error.response.data);
        });
    } else alert('로그인을 해주세요');
  };

  const deleteArticle = () => {
    if (getAuth() && articleId) {
      if (window.confirm('정말로 삭제하시겠습니까?')) {
        axios
          .post(`http://${process.env.IP_ADDRESS}/board/delete_article.php`, {
            boardId: parseInt(articleId, 10),
            userId: (getAuth() as AuthStorageType)['userId'],
          })
          .then(() => {
            alert('글 삭제 성공');
            navigate('/');
          })
          .catch((error) => {
            alert(error.response.data);
          });
      }
    } else alert('로그인을 해주세요');
  };

  const deleteComment = (commentId: number) => {
    if (getAuth()) {
      if (window.confirm('정말로 삭제하시겠습니까?')) {
        axios
          .post(`http://${process.env.IP_ADDRESS}/comment/delete_comment.php`, {
            commentId,
            userId: (getAuth() as AuthStorageType)['userId'],
          })
          .then(() => {
            alert('댓글 삭제 성공');
            getCommentsInfo();
          })
          .catch((error) => {
            alert(error.response.data);
          });
      }
    } else alert('로그인을 해주세요');
  };

  useEffect(() => {
    getArticleInfo();
    getCommentsInfo();
  }, []);

  return articleObj ? (
    <>
      <div>
        <div className="article-title">
          <div className="font-28">{articleObj['title']}</div>
          {getAuth() && articleObj['userId'] === (getAuth() as AuthStorageType)['userId'] ? (
            <div className="delete_button" onClick={() => deleteArticle()}>
              삭제
            </div>
          ) : null}
        </div>
        <div className="article-writter">
          <span className="margin_right_10px font-18">{articleObj['loginId']}</span>
          <span className="font-11">2일 전</span>
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
                  <div className="article-comments-profile-name">
                    <div className="font-20">{commentsObj['loginId']}</div>
                    {getAuth() &&
                    commentsObj['userId'] === (getAuth() as AuthStorageType)['userId'] ? (
                      <div
                        className="delete_button"
                        onClick={() => deleteComment(commentsObj['commentId'])}
                      >
                        삭제
                      </div>
                    ) : null}
                  </div>
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

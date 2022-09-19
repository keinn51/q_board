import React from 'react';
import '@css/Main/ArticleList.css';
import CategoryArr from '@globalObj/categoryArr';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const ArticleList = (props: { categoryId: number }) => {
  const { categoryId } = props;
  const navigate = useNavigate();
  const [articleList, setArticleList] = useState([]);

  const onClickArticle = (id: number) => {
    navigate(`/article/${id}`);
  };

  const getArticleList = () => {
    axios
      .get(`http://${process.env.IP_ADDRESS}/board/get_articles.php?categoryId=${categoryId}`)
      .then((res) => {
        setArticleList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getArticleList();
  }, []);

  return (
    <div className="article_list">
      <div className="article_list-header">
        <div className="flex_vertical_middle">
          <div>{CategoryArr[categoryId]}</div>
        </div>
      </div>
      {articleList.length
        ? articleList.map((article) => (
            <div key={article['boardId']} className="article_list-section">
              <div className="article_list-section-content">
                <div className="article_list-section-content-header">
                  <div className="grid_10px_gap">
                    <div>{article['loginId']}</div>
                    <div>14일전</div>
                  </div>
                  <div className="grid_10px_gap">
                    <div>10개의 댓글</div>
                  </div>
                </div>
                <div onClick={() => onClickArticle(article['boardId'])}>{article['content']}</div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default ArticleList;

import React from 'react';
import '@css/Main/ArticleList.css';
import CategoryArr from '@globalObj/categoryArr';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const ArticleList = (props: {
  categoryId: number;
  setArticleId: React.Dispatch<React.SetStateAction<number | null>>;
  setCategoryId: React.Dispatch<React.SetStateAction<number | null>>;
  pageMode: string;
  setPageMode?: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { categoryId, setArticleId, setCategoryId, pageMode, setPageMode } = props;
  const [articleList, setArticleList] = useState([]);

  const onClickArticle = (id: number) => {
    setArticleId(42);
    setCategoryId(null);
  };

  const onclickCreaeteArticle = () => {
    if (setPageMode) setPageMode('article_create');
  };

  const getArticleList = () => {
    axios
      .get(`http://${process.env.IP_ADDRESS}/board/get.php?categoryId=${categoryId}`)
      .then((res) => {
        console.log(res.data);
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
                <div className="article_list-section-content-title" onClick={() => onClickArticle(42)}>
                  {article['content']}
                </div>
              </div>
            </div>
          ))
        : null}
      {pageMode === 'article_list' ? (
        <div className="flex_horizontal_end">
          <div className="article_list-create_btn flex_vertical_middle button" onClick={onclickCreaeteArticle}>
            게시글 생성
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ArticleList;

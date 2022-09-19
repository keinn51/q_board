import React from 'react';
import '@css/Category/Category.css';
import CategoryArr from '@globalObj/categoryArr';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';

const Category = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [articleList, setArticleList] = useState([]);

  const onClickArticle = (id: number) => {
    navigate(`/article/${id}`);
  };

  const onclickCreaeteArticle = () => {
    navigate('/create/article');
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
  }, [categoryId]);

  return (
    <div className="category">
      <div className="category-header">
        <div className="flex_vertical_middle">
          <div>{CategoryArr[categoryId ? parseInt(categoryId, 10) : 0]}</div>
        </div>
      </div>
      {articleList.length
        ? articleList.map((article) => (
            <div key={article['boardId']} className="category-section">
              <div className="category-section-content">
                <div className="category-section-content-header">
                  <div className="grid_10px_gap">
                    <div>{article['loginId']}</div>
                    <div>14일전</div>
                  </div>
                  <div className="grid_10px_gap">
                    <div>10개의 댓글</div>
                  </div>
                </div>
                <div
                  className="category-section-content-title"
                  onClick={() => onClickArticle(article['boardId'])}
                >
                  {article['content']}
                </div>
              </div>
            </div>
          ))
        : null}
      <div className="flex_horizontal_end">
        <div
          className="category-create_btn flex_vertical_middle button"
          onClick={onclickCreaeteArticle}
        >
          게시글 생성
        </div>
      </div>
    </div>
  );
};

export default Category;

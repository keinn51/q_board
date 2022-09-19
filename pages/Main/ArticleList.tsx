import React from 'react';
import '@css/Main/ArticleList.css';

const ArticleList = (props: {
  categoryTitle: string;
  setArticleId: React.Dispatch<React.SetStateAction<number | null>>;
  setCategoryId: React.Dispatch<React.SetStateAction<number | null>>;
  pageMode: string;
  setPageMode?: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { categoryTitle, setArticleId, setCategoryId, pageMode, setPageMode } = props;

  const onClickArticle = (id: number) => {
    setArticleId(42);
    setCategoryId(null);
  };

  const onclickCreaeteArticle = () => {
    if (setPageMode) setPageMode('article_create');
  };

  return (
    <div className="article_list">
      <div className="article_list-header">
        <div className="flex_vertical_middle">
          <div>{categoryTitle}</div>
        </div>
      </div>
      <div className="article_list-section">
        <div className="article_list-section-content">
          <div className="article_list-section-content-header">
            <div className="grid_10px_gap">
              <div>QUV</div>
              <div>14일전</div>
            </div>
            <div className="grid_10px_gap">
              <div>6추</div>
              <div>10댓</div>
            </div>
          </div>
          <div className="article_list-section-content-title" onClick={() => onClickArticle(42)}>
            QUV 떡상 가즈아
          </div>
        </div>
      </div>
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

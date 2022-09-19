import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import ArticleList from './ArticleList';
import Article from './Article';
import '@css/Main/Main.css';
import ArticleCreate from './ArticleCreate';
import CategoryArr from '@globalObj/categoryArr';

const Main = () => {
  const [pageMode, setPageMode] = useState('main');
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [articleId, setArticleId] = useState<number | null>(null);

  const onClickSideCategory = (id: number) => {
    setCategoryId(id);
    setArticleId(null);
  };

  const getRenderingContent = useCallback(() => {
    if (pageMode === 'main')
      return (
        <div className="section-articles">
          {CategoryArr.map((_, idx) => (
            <ArticleList
              key={idx}
              pageMode={pageMode}
              categoryId={idx}
              setArticleId={setArticleId}
              setCategoryId={setCategoryId}
            />
          ))}
        </div>
      );
    else if (pageMode === 'article_list')
      return (
        <ArticleList
          pageMode={pageMode}
          categoryId={categoryId as number}
          setArticleId={setArticleId}
          setCategoryId={setCategoryId}
          setPageMode={setPageMode}
        />
      );
    else if (pageMode === 'article_create') return <ArticleCreate />;
    else return <Article articleId={articleId}></Article>;
  }, [pageMode, categoryId, articleId]);

  useEffect(() => {
    if (articleId !== null) setPageMode('article');
    if (categoryId !== null) setPageMode('article_list');
  }, [articleId, categoryId]);

  return (
    <div className="section">
      <div className="section-category">
        <div className="section-category-title">Categories</div>
        <div className="section-category-links">
          {CategoryArr.map((title, id) => (
            <div key={title}>
              <span className="hover_pointer" onClick={() => onClickSideCategory(id)}>
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>
      {getRenderingContent()}
    </div>
  );
};

export default Main;

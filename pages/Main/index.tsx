import React, { useEffect } from 'react';
import ArticleList from './ArticleList';
import "@css/Main/Main.css";
import { useState } from 'react';

const Main = () => {
  const [pageMode, setPageMode] = useState('main');
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const ArticleCategoryArr = ["EDITOR'S CHOICE", "WEEKLY BEST", "Q&A", "KNOWLEDGE"];

  useEffect(() => {
    if (categoryId !== null) setPageMode('category');
  }, [categoryId])

  return (
    <div className='section'>
      <div className='section-category'>
        <div className='section-category-title'>Categories</div>
        <div className='section-category-links'>
          {ArticleCategoryArr.map((title, id) => <div key={title} >
            <span className='hover_pointer' onClick={() => setCategoryId(id)}>{title}</span>
          </div>)}
        </div>
      </div>
      {pageMode === 'main' ?
        <div className='section-articles'>
          {ArticleCategoryArr.map((title) => <ArticleList key={title} categoryTitle={title} />)}
        </div>
        :
        <div>
          <ArticleList categoryTitle={ArticleCategoryArr[categoryId as number]} />
        </div>}
    </div>
  );
}

export default Main;
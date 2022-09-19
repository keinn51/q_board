import React from 'react';
import ArticleList from './ArticleList';
import '@css/Main/Main.css';
import CategoryArr from '@globalObj/categoryArr';

const Main = () => {
  return (
    <div className="main-articles">
      {CategoryArr.map((_, idx) => (
        <ArticleList key={idx} categoryId={idx} />
      ))}
    </div>
  );
};

export default Main;

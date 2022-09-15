import React from 'react';
import Article from './Article';
import "@css/Main/Main.css";

const Main = () => {
  const ArticleCategoryArr = ["EDITOR'S CHOICE", "WEEKLY BEST", "Q&A", "KNOWLEDGE"];
  return (
    <div className='section'>
      <div className='section-category'>
        <div className='section-category-title'>Categories</div>
        <div className='section-category-links'>
          <div>Q&A (120)</div>
          <div>KNOWLEDGE (1234)</div>
          <div>EVENTS (44)</div>
          <div>NOTICE (63)</div>
          <div>JOBS (1424)</div>
        </div>
      </div>
      <div className='section-articles'>
        {ArticleCategoryArr.map((title) => <Article categoryTitle={title} />)}
      </div>
    </div>
  );
}

export default Main;
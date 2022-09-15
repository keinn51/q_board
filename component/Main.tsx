import React from 'react';
import Article from './Article';
import "@css/Main.css";

const Main = () => {
  const ArticleCategoryArr = ["EDITOR'S CHOICE", "WEEKLY BEST", "Q&A", "KNOWLEDGE"];
  return (
    <>
      <div className='header'>
        <div className='header-wrapper'>
          <div className='header-logo'>Quv Board</div>
          <div className='header-auth_box'>
            <div className='button flex_vertical_middle'>
              <div>로그인</div>
            </div>
            <div className='button flex_vertical_middle'>
              <div>회원가입</div>
            </div>
          </div>
        </div>
      </div>
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
    </>
  );
}

export default Main;
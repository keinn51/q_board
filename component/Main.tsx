import React from 'react';
import Article from './Article';

const Main = () => {
  const ArticleCategoryArr = ["EDITOR'S CHOICE", "WEEKLY BEST", "Q&A", "KNOWLEDGE"];
  return (
    <>
      <div>
        <div className='header'>
          <div className='header-logo'>Quv Board</div>
          <div className='header-auth_box'>
            <div>로그인</div>
            <div>회원가입</div>
          </div>
        </div>
      </div>
      <div>
        <div className='section'>
          <div className='section-category'>
            <div>Q&A</div>
            <div>KNOWLEDGE</div>
            <div>EVENTS</div>
            <div>NOTICE</div>
            <div>JOBS</div>
          </div>
          <div className='section-articles'>
            {ArticleCategoryArr.map((title) => <Article categoryTitle={title} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
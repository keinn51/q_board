import React from 'react';
import '@css/Main/ArticleCreate.css';
import { getAuth } from '@cert/AuthStorage';
import { AuthStorageType } from '@globalObj/types';

const ArticleCreate = () => {
  return (
    <div className="article_create">
      <div className="article_create-header">
        <p className="font-25">당신의 생각을 들려주세요</p>
        <p>
          {(getAuth() as AuthStorageType)['loginId']}님 지식공유 플랫폼 OKKY에서 최고의 개발자들과 함께 궁금증을
          해결하세요.
        </p>
      </div>
      <div className="article_create-title">
        <p className="font-18">제목</p>
        <textarea className={`article_create-title_textarea`} cols={50} placeholder="제목을 입력해주세요" />
      </div>
      <div className="article_create-content">
        <p className="font-18">상세정보</p>
        <textarea className={`article_create-content_textarea`} rows={10} placeholder="내용을 입력해주세요" />
      </div>
      <div className="flex_horizontal_end">
        <div className="article_create-create_btn flex_vertical_middle button">게시글 생성</div>
      </div>
    </div>
  );
};

export default ArticleCreate;

import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import ArticleList from './ArticleList';
import Article from './Article';
import "@css/Main/Main.css";

const Main = () => {
  const [pageMode, setPageMode] = useState('main');
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [articleId, setArticleId] = useState<number | null>(null);
  const ArticleCategoryArr = ["EDITOR'S CHOICE", "WEEKLY BEST", "Q&A", "KNOWLEDGE"];

  const onClickSideCategory = (id: number) => {
    setCategoryId(id);
    setArticleId(null);
  }

  const getRenderingContent = useCallback(() => {
    if (pageMode === 'main')
      return (
        <div className='section-articles'>
          {ArticleCategoryArr.map((title) => <ArticleList key={title} categoryTitle={title} setArticleId={setArticleId} setCategoryId={setCategoryId}/>)}
        </div>
      )
    else if (pageMode === 'article_list')
      return (<ArticleList categoryTitle={ArticleCategoryArr[categoryId as number]} setArticleId={setArticleId} setCategoryId={setCategoryId}/>)
    else
      return (<Article articleId={articleId}></Article>)
  }, [pageMode, categoryId, articleId]);

  useEffect(() => {
    if (articleId !== null) setPageMode('article');
    if (categoryId !== null) setPageMode('article_list');
  }, [articleId, categoryId])

  // console.log(categoryId);
  // console.log(articleId);

  return (
    <div className='section'>
      <div className='section-category'>
        <div className='section-category-title'>Categories</div>
        <div className='section-category-links'>
          {ArticleCategoryArr.map((title, id) => <div key={title} >
            <span className='hover_pointer' onClick={() => onClickSideCategory(id)}>{title}</span>
          </div>)}
        </div>
      </div>
      {getRenderingContent()}
    </div>
  );
}

export default Main;
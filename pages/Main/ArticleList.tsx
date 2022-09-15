import React from 'react';
import "@css/Main/ArticleList.css";

const ArticleList = (props: {
    categoryTitle: string,
    setArticleId: React.Dispatch<React.SetStateAction<number | null>>,
    setCategoryId: React.Dispatch<React.SetStateAction<number | null>>
}) => {
    const { categoryTitle, setArticleId,setCategoryId } = props;
    const onClickArticle = (id:number) => {
        setArticleId(42);
        setCategoryId(null);
    }
    return (
        <div className='article_list'>
            <div className='article_list-header'>
                <div className='flex_vertical_middle'>
                    <div>
                        {categoryTitle}
                    </div>
                </div>
            </div>
            <div className='article_list-section'>
                <div className='article_list-section-content'>
                    <div className='article_list-section-content-header'>
                        <div className='grid_10px_gap'>
                            <div>QUV</div>
                            <div>14일전</div>
                        </div>
                        <div className='grid_10px_gap'>
                            <div>6추</div>
                            <div>10댓</div>
                        </div>
                    </div>
                    <div className='article_list-section-content-title' onClick={() => onClickArticle(42)}>
                        QUV 떡상 가즈아
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleList;
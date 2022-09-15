import React from 'react';

const Article = (props: { categoryTitle: string }) => {
    const { categoryTitle } = props;
    return (
        <div className='article'>
            <div className='article-header'>{categoryTitle}</div>
            <div className='article-section'>
                <div className='article-section-content'>
                    <div className='article-section-content-header'>
                        <div>
                            <div>QUV</div>
                            <div>14일전</div>
                        </div>
                        <div>
                            <div>6추</div>
                            <div>10댓</div>
                        </div>
                    </div>
                    <div className='article-section-content-title'>
                        QUV 떡상 가즈아
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Article;
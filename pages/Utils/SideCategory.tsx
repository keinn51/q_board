import React from 'react';
import { useNavigate } from 'react-router';
import '@css/Main/Main.css';
import CategoryArr from '@globalObj/categoryArr';
import '@css/Utils/SideCategory.css';

const SideCategory = () => {
    const navigate = useNavigate();

    const onClickSideCategory = (id: number) => {
        navigate(`/category/${id}`);
    };

    return (
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
    );
};

export default SideCategory;

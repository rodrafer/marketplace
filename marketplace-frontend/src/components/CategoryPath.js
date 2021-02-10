import React from 'react';
import './CategoryPath.scss';

const CategoryPath = ({ categories }) => {
    return (
        <div className="category-container">
            {categories.map((category, key) => (
                <p key={key}
                    className={
                        categories.indexOf(category) !== categories.length - 1 ? 'category-item' : 'last-category'
                    }>
                    {categories.indexOf(category) !== categories.length - 1 ?
                        `${category}\u00A0\u00A0>\u00A0\u00A0`:
                        category}
                </p>
            ))}
        </div>
    );
};

export default CategoryPath;

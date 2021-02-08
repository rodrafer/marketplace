import React from 'react';
import './SearchResultItem.scss';

const SearchResultItem = ({ item }) => {
    return (
        <div className="result-item-container">
            <img src={item.picture} />
            <p>{item.title}</p>
            <p>{item.condition}</p>
            <p>{item.price.amount} {item.price.currency}</p>
        </div>
    )
}

export default SearchResultItem;

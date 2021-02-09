import React from 'react';
import './SearchResultItem.scss';
import shippingIcon from '../assets/ic_shipping@2x.png.png';

const formatNumber = (number) => {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

const SearchResultItem = ({ item }) => {
    return (
        <div className="result-item-container">
            <img className="item-picture" src={item.picture}/>
            <div className="item-specs">
                <p className="item-price">$ {formatNumber(item.price.amount)}</p>
                {item.free_shipping ? <img className="shipping-icon" src={shippingIcon}/> : ''}
            </div>
            <p className="item-location">{item.state_name}</p>
            <p className="item-title">{item.title}</p>
        </div>
    );
};

export default SearchResultItem;

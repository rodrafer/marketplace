import React, { useEffect, useState } from 'react';
import './ItemDetailsPage.scss';
import CategoryPath from '../components/CategoryPath';

const formatNumber = (number) => {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};

const ItemDetailsPage = ({ match, location }) => {
    let itemId = match.params.id;

    const [item, setItem] = useState();
    const [categories, setCategories] = useState();

    useEffect(() => {
        const fetchData = () => {
            fetch(`/api/items/${itemId}`)
                .then(response => response.json())
                .then(responseBody => {
                    setItem(responseBody.item);
                    setCategories(location.itemProps);
                });
        };
        fetchData();
    }, [itemId]);

    return (
        <>
            {categories ? <CategoryPath categories={categories}/> : ''}
            <div className="item-details-container">
                {item ?
                    <div className="item-details">
                        <img className="item-detail-picture" src={item.picture.url}/>
                        <div className="item-detail-info">
                            <p className="item-condition">
                                {item.condition === 'new' ? 'Nuevo' : 'Usado'} - {item.sold_quantity} vendidos
                            </p>
                            <h2 className="item-title">{item.title}</h2>
                            <h1 className="item-price">
                                ${'\u00A0' + formatNumber(item.price.amount)}
                                <sup style={{fontSize: '0.5em'}}>
                                    {item.price.decimals}
                                </sup> {item.price.currency !== 'ARS' ? item.price.currency : ''}
                            </h1>
                            <button className="buy-button">Comprar</button>
                        </div>
                        <div className="item-detail-description">
                            <h2 className="item-description-title">Descripción del producto</h2>
                            <p className="item-description">{item.description}</p>
                        </div>
                    </div>
                    : ''}
            </div>
        </>
    );
};

export default ItemDetailsPage;

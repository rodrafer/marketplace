import React, { useEffect, useState } from 'react';
import './ItemDetailsPage.scss';

const formatNumber = (number) => {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

const ItemDetailsPage = ({ match }) => {
    let itemId = match.params.id;

    const [item, setItem] = useState();

    useEffect(() => {
        const fetchData = () => {
            fetch(`/api/items/${itemId}`)
                .then(response => response.json())
                .then(responseBody => {
                    setItem(responseBody.item);
                });
        };
        fetchData();
    }, [itemId]);

    return (
        <>
            {/* <div className="item-category-container">
                {itemCategories ? itemCategories.map((category, key) => (
                    <p key={key}
                        className={
                            categories.indexOf(category) !== categories.length - 1 ? 'category-item' : 'last-category'
                        }>
                        {categories.indexOf(category) !== categories.length - 1 ?
                        `${category}\u00A0\u00A0>\u00A0\u00A0`:
                        category}
                    </p>
                )) : ''}
                style={{marginRight: spacing + 'em'}}
            </div> */}
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

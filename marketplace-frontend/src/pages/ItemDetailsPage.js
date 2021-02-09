import React, { useEffect, useState } from 'react';
import './ItemDetailsPage.scss';

const ItemDetailsPage = ({ match }, { itemCategories }) => {
    let itemId = match.params.id;
    console.log(itemCategories)

    const [item, setItem] = useState();

    useEffect(() => {
        const fetchData = () => {
            fetch(`/api/items/${itemId}`)
                .then(response => response.json())
                .then(responseBody => {
                    setItem(responseBody.item);
                });
        }
        fetchData();
    }, [itemId])

    return (
        <>
            <div className="item-category-container">
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
            </div>
            <div className="item-details-container">
                {item ?
                    <div className="item-details">
                        <img className="item-detail-picture" src={item.picture}/>
                        <div className="item-detail-info">
                            <p className="item-condition">
                                {item.condition === 'new' ? 'Nuevo' : 'Usado'} - {item.sold_quantity} vendidos
                            </p>
                            <h2 className="item-title">{item.title}</h2>
                            <h1 className="item-price">$ {item.price.amount}</h1>
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
    )
}

export default ItemDetailsPage;

import React, { useEffect, useState } from 'react';

const ItemDetailsPage = ({ match }) => {
    let itemId = match.params.id;

    const [item, setItem] = useState();

    useEffect(() => {
        const fetchData = () => {
            fetch(`api/items/${itemId}`)
                .then(response => response.text())
                .then(responseBody => {
                    console.log(responseBody)
                    setItem(responseBody.item);
                });
        }
        fetchData();
    }, [itemId])

    return (
        <div>{item ?
            <div>
                <img src={item.picture}/>
                <div>
                    <p>{item.condition} - </p>
                    <p>{item.sold_quantity} vendidos</p>
                </div>
                <h1>{item.title}</h1>
                <h1>{item.price}</h1>
                <button>Comprar</button>
                <h2>Descripción del producto</h2>
                <p>{item.description}</p>
            </div>
        : <p></p>}</div>
    )
}

export default ItemDetailsPage;

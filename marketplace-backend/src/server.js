import express from 'express';
const fetch = require('node-fetch');

const app = express();
const PORT = 8000;

app.get('/api/items', async (req, res) => {
    const q = req.query.q;
    let rawItems;
    let categoryFilter;
    let categories = [];
    let formatedItems = [];

    await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${q}&limit=4`)
        .then(response => response.json())
        .then(data => {
            rawItems = data.results;
            categoryFilter = data.filters.find(filter => filter.id === 'category');
        });

    rawItems.forEach(rawItem => {
        const formatedItem = {
            id: rawItem.id,
            title: rawItem.title,
            price: {
                currency: rawItem.prices.prices[0].currency_id,
                amount: rawItem.prices.prices[0].amount,
                decimals: 0
            },
            picture: rawItem.thumbnail,
            condition: rawItem.condition,
            free_shipping: rawItem.shipping.free_shipping,
            state_name: rawItem.address.state_name
        };
        formatedItems.push(formatedItem);
    });

    categoryFilter ? categoryFilter.values[0].path_from_root.forEach(path => {
        categories.push(path.name);
    }) : categories.push('');

    const results = {
        author: {
            name: 'Rodrigo',
            lastname: 'Fernandez'
        },
        categories: categories,
        items: formatedItems
    };

    res.status(200).send(results);
});

app.get('/api/items/:id', async (req, res) => {
    const id = req.params.id;
    let itemDetails;
    let itemDescription;

    await fetch(`https://api.mercadolibre.com/items/${id}`)
        .then(response => response.json())
        .then(data => itemDetails = data);

    await fetch(`https://api.mercadolibre.com/items/${id}/description`)
        .then(response => response.json())
        .then(data => itemDescription = data);

    const formatedItem = {
        id: itemDetails.id,
        title: itemDetails.title,
        price: {
            currency: itemDetails.currency_id,
            amount: itemDetails.price,
            decimals: 2
        },
        picture: itemDetails.thumbnail,
        condition: itemDetails.condition,
        free_shipping: itemDetails.shipping.free_shipping,
        sold_quantity: itemDetails.sold_quantity,
        description: itemDescription.plain_text
    };

    const results = {
        author: {
            name: 'Rodrigo',
            lastname: 'Fernandez'
        },
        item: formatedItem
    };

    res.status(200).send(results);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}.`));

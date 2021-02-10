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
                currency: rawItem.currency_id,
                amount: rawItem.price,
                decimals: '00'
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
        .then(data => {
            itemDetails = data;
        });

    await fetch(`https://api.mercadolibre.com/items/${id}/description`)
        .then(response => response.json())
        .then(data => {
            itemDescription = data;
        });

    const formatedItem = {
        id: itemDetails.id,
        title: itemDetails.title,
        price: {
            currency: itemDetails.currency_id,
            amount: itemDetails.price,
            decimals: '00'
        },
        picture: itemDetails.pictures[0],
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

let server = app.listen(PORT, () => console.log(`Server listening on port ${PORT}.`));

process.on('uncaughtException', (err) => {
    console.info('uncaughtException signal received: ' + err);
    console.log('Closing http server.');
    server.close(() => console.log('Http server closed.'));
});

process.on('SIGTERM', (err) => {
    console.info('SIGTERM signal received: ' + err);
    console.log('Closing http server.');
    server.close(() => console.log('Http server closed.'));
});

/* To kill the server process:
1- Open cmd as administrator
2- Execute netstat -ano | findstr :<PORT>, where <PORT> is the port on which the server is listening
3- Execute taskkill /PID <PID> /F, where <PID> is the Process ID of the listening server
4- Run again netstat -ano | findstr :<PORT> to check if the process has ended*/

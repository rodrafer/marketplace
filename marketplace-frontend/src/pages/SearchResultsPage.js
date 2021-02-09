import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SearchResultsPage.scss'
import SearchResultItem from '../components/SearchResultItem';

const resultItems = [
    {
        "id": "MLA897892196",
        "title": "iPad Apple 8ª Generación 2020 A2270 10.2  32gb Space Gray Con Memoria Ram 3gb ",
        "price": {
            "currency": "ARS",
            "amount": 53450,
            "decimals": 0
        },
        "picture": "http://http2.mlstatic.com/D_719147-MLA44099619310_112020-I.jpg",
        "condition": "new",
        "free_shipping": true
    },
    {
        "id": "MLA907313191",
        "title": "iPad Apple 8ª Generación 2020 A2270 10.2  32gb Silver Con Memoria Ram 3gb ",
        "price": {
            "currency": "ARS",
            "amount": 53999,
            "decimals": 0
        },
        "picture": "http://http2.mlstatic.com/D_971577-MLA44099619331_112020-I.jpg",
        "condition": "new",
        "free_shipping": true
    },
    {
        "id": "MLA875029375",
        "title": "iPad Apple 7ª Generación 2019 A2197 10.2  32gb Space Gray Con Memoria Ram 3gb ",
        "price": {
            "currency": "ARS",
            "amount": 57395,
            "decimals": 0
        },
        "picture": "http://http2.mlstatic.com/D_651180-MLA42227826734_062020-I.jpg",
        "condition": "new",
        "free_shipping": true
    },
    {
        "id": "MLA902132498",
        "title": "iPad Apple 8ª Generación 2020 A2270 10.2  128gb Silver Con Memoria Ram 3gb ",
        "price": {
            "currency": "ARS",
            "amount": 78600,
            "decimals": 0
        },
        "picture": "http://http2.mlstatic.com/D_908744-MLA44099561456_112020-I.jpg",
        "condition": "new",
        "free_shipping": true
    }
]

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const SearchResultsPage = () => {
    let query = useQuery();
    let searchedQuery = query.get('search');

    const [items, setItems] = useState();
    const [categories, setCategories] = useState();

    useEffect(() => {
        const fetchData = () => {
            fetch(`api/items?q=${searchedQuery}`)
                .then(response => response.json())
                .then(responseBody => {
                    setItems(responseBody.items);
                    setCategories(responseBody.categories);
                });
        }
        fetchData();
    }, [searchedQuery])

    return (
        <div className="results-wrapper">
            <div className="category-path">
                {categories ? categories.map((category, key) => (
                    <p key={key} className={categories.indexOf(category) !== categories.length - 1 ? 'category-item' : 'last-category'}>
                        {categories.indexOf(category) !== categories.length - 1 ? `${category}\u00A0\u00A0>\u00A0\u00A0`: category}
                    </p>
                )) : <p></p>}
            </div>
            <div className="items-container">
                {items ? items.map((item, key) => (
                    <Link to={`/items/${item.id}`} key={key} className="item-link">
                        <SearchResultItem item={item}/>
                        <div className="line-division"></div>
                    </Link>
                )) : <h1 className="loading-results">Buscando {searchedQuery}...</h1>}
            </div>
        </div>
    )
}

export default SearchResultsPage;

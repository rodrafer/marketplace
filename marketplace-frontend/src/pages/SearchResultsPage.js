import React from 'react';
import { Link } from 'react-router-dom';
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

const SearchResultsPage = ({ items = resultItems }) => {
    return (
        <div className="results-wrapper">
                {items.map((item, key) => (
                    <Link to={`/items/${item.id}`} key={key} className="item-link">
                        <SearchResultItem item={item}/>
                    </Link>
                ))}
        </div>
    )
}

export default SearchResultsPage;

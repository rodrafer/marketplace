import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SearchResultsPage.scss'
import SearchResultItem from '../components/SearchResultItem';

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
            fetch(`/api/items?q=${searchedQuery}`)
                .then(response => response.json())
                .then(responseBody => {
                    setItems(responseBody.items);
                    setCategories(responseBody.categories);
                });
        }
        fetchData();
    }, [searchedQuery])

    return (
        <>
            <div className="category-container">
                {categories ? categories.map((category, key) => (
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
            <div className="items-container">
                {items ? items.map((item, key) => (
                    <Link to={`/items/${item.id}`} key={key} className="item-link">
                        <SearchResultItem item={item}/>
                        <div className="line-division"></div>
                    </Link>
                )) : <h1 className="loading-results">Buscando {searchedQuery}...</h1>}
            </div>
        </>
    )
}

export default SearchResultsPage;

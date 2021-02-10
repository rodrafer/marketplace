import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SearchResultsPage.scss';
import SearchResultItem from '../components/SearchResultItem';
import CategoryPath from '../components/CategoryPath';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

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
        };
        fetchData();
    }, [searchedQuery]);

    return (
        <>
            {categories ? <CategoryPath categories={categories}/> : ''}
            <div className="items-container">
                {items ? items.map((item, key) => (
                    <Link key={key}
                        className="item-link"
                        to={{
                            pathname: `/items/${item.id}`,
                            itemProps: categories
                        }}>
                        <SearchResultItem item={item}/>
                        <div className="line-division"></div>
                    </Link>
                )) : <h1 className="loading-results">Buscando {searchedQuery}...</h1>}
            </div>
        </>
    );
};

export default SearchResultsPage;

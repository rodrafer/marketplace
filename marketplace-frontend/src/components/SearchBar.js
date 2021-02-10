import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SearchBar.scss';
import companyLogo from '../assets/Logo_ML@2x.png.png';
import searchIcon from '../assets/ic_Search@2x.png.png';

const SearchBar = ({ routeProps }) => {
    const [query, setQuery] = useState('');

    window.onload = () => {
        routeProps.history.replace('/');
    };

    const enterSearch = () => {
        routeProps.history.push(`/items?search=${query}`);
    };

    const backToHome = (event) => {
        event.stopPropagation();
        setQuery('');
    };

    return (
        <header className="header">
            <Link to="/" onClick={event => backToHome(event)}>
                <img className="header_logo" src={companyLogo}/>
            </Link>
            <div className="header-search">
                <input className="header-search_input"
                    type="text"
                    placeholder="Nunca dejes de buscar"
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                    onKeyUp={event => event.key === 'Enter' ? enterSearch() : ''}/>
                <Link to={`/items?search=${query}`}>
                    <figure className="header-search_figure">
                        <img className="header-search_icon" src={searchIcon}/>
                    </figure>
                </Link>
            </div>
        </header>
    );
};

export default SearchBar;

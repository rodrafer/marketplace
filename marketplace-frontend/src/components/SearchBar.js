import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SearchBar.scss';
import companyLogo from '../assets/Logo_ML@2x.png.png';
import searchIcon from '../assets/ic_Search@2x.png.png';

const SearchBar = () => {
    const [query, setQuery] = useState('');

    return (
        <header className="header">
            <img className="header_logo" src={companyLogo}/>
            <div className="header-search">
                <input className="header-search_input"
                       type="text"
                       placeholder="Nunca dejes de buscar"
                       value={query}
                       onChange={event => setQuery(event.target.value)}/>
                <Link to={`/items?search=${query}`}>
                    <figure className="header-search_figure">
                        <img className="header-search_icon" src={searchIcon}/>
                    </figure>
                </Link>
            </div>
        </header>
    )
}

export default SearchBar;

/*global module*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import './App.scss';
import SearchBar from './components/SearchBar.js';
import SearchResultsPage from './pages/SearchResultsPage';
import ItemDetailsPage from './pages/ItemDetailsPage';
import NotFoundPage from './pages/NotFoundPage';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/" render={props => <SearchBar routeProps={props}/>}/>
                    <main className="main-content">
                        <Switch>
                            <Route path="/items" component={SearchResultsPage} exact />
                            <Route path="/items/:id" component={ItemDetailsPage} />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </main>
                </div>
            </Router>
        );
    }
}

export default hot(module)(App);

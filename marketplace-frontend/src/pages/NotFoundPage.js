import React from 'react';
import './NotFoundPage.scss';

const NotFoundPage = ({ match }) => {
    return (
        <div className="not-found-container">
            {match.isExact ? '' : <h1>404: Page Not Found</h1>}
        </div>
    );
};

export default NotFoundPage;

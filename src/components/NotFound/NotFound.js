import React from 'react';
import './NotFound.css';
const NotFound = () => {
  return (
    <React.Fragment>
      <div className="error-message-container">
        <h4>Error 404</h4>
        <h4 className="not-found">
          We couldn't find the page You are looking for.
        </h4>
      </div>
    </React.Fragment>
  );
};
export default NotFound;

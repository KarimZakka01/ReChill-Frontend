import * as React from 'react';
import './error.styles.css';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '@components/button';

export default function Error() {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <div id="error-page">
        <div>
          <h1 className="error-header">Oops!</h1>
          <p className="error-subheader">
            Sorry, an unexpected error has occurred.
          </p>
          <div className="error-handler-container">
            <p className="error-message">
              {error.status} {error.statusText}
            </p>
            <Link className="error-safety" to="/">
              <Button>Back to safety!</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

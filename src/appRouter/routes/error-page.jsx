import React from 'react';
import {useRouteError} from "react-router-dom"

const ErrorPage = () => {

  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Ooops!</h1>
      <p>Sorry, something just went wrong</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;

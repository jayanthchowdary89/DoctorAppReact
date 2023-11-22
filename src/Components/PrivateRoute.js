import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <ViewProfile/>
      ) : (
        <Redirect to="/loginDoc" />
      )
    }
  />
);

export default PrivateRoute;
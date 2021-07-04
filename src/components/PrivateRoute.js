import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import useToken from '../hooks/useToken';
import NavBar from './NavBar';

export default function PrivateRoute({ children, ...rest }) {
  let { token } = useToken();
  const loggedIn = token != null;

  return (
    <Route
      {...rest}
      render={() => {
        return loggedIn ? (
          <>
            <NavBar />
            <div className="section has-background-light">
              <div className="container">
                {children}
              </div>
            </div>
          </>
        ) : <Redirect to="/login" />;
      }}
    />
  );
}

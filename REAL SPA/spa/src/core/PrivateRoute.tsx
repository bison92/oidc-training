import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { Loader, LoaderKind } from '../shared';
import { AuthenticationConsumer } from './authentication/AuthenticationProvider';

export const PrivateRoute = ({ component: Component, ...rest }: RouteProps): JSX.Element => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <AuthenticationConsumer>
          {({ user, loading }) => {
            console.log(loading);
            console.log(user);
            if (loading) {
              return <Loader loaderKind={LoaderKind.FullParent}/>;
            } else {
              if (!!Component && user !== null) {
                return <Component {...props} />;
              } else {
                return <Redirect to="/unauthorized" />;
              }
            }
          }}
        </AuthenticationConsumer>
      )}
    />
  );
};

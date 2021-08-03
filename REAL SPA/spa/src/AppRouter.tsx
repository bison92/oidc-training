import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NotFound, Unauthorized } from './shared/errorPages';
import { AppLayout, BaseLayout } from './shared';
import { Dashboard } from './app/dashboard';
import { Accounts } from './app/accounts';
import { PublicHome } from './app/public';
import { OidcCallback } from './core/authentication/oidc/OidcCallback';
import { OidcLogout } from './core/authentication/oidc/OidcLogout';
import { PrivateRoute } from './core/PrivateRoute';

const AppRouter = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={['/signin-oidc', '/signout-oidc', '/logout', '/silent-renew-oidc']}>
            <Route exact path="/signin-oidc" component={OidcCallback} />
            <Route exact path="/logout" component={OidcLogout} />
          </Route>
          <Route path={['/unauthorized', '/not-found', '/dashboard', '/']}>
            <BaseLayout>
              <Route exact path="/" component={PublicHome} />
              <Route exact path="/unauthorized" component={Unauthorized} />
              <Route exact path="/not-found" component={NotFound} />
              <Route path={['/dashboard', '/transactions']}>
                <AppLayout>
                  <PrivateRoute exact path="/dashboard" component={Dashboard} />
                </AppLayout>
              </Route>
            </BaseLayout>
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export { AppRouter };

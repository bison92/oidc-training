import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NotFound, Unauthorized } from './shared/errorPages';
import { AppLayout, BaseLayout } from './shared';
import { Dashboard } from './app/dashboard';
import { Accounts } from './app/accounts';
import { PublicHome } from './app/public';

const AppRouter = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={['/unauthorized', '/not-found', '/dashboard', '/']}>
            <BaseLayout>
              <Route exact path="/" component={PublicHome} />
              <Route exact path="/unauthorized" component={Unauthorized} />
              <Route exact path="/not-found" component={NotFound} />
              <Route path={['/dashboard', '/transactions']}>
                <AppLayout>
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/accounts" component={Accounts} />
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

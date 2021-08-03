import './polyfill';
import './styles/index.less';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './AppRouter';
import { IoCProvider } from './core/ioc';
import {
  SpaSettings,
  IConfigurationService,
  IConfigurationServiceType,
} from './core/configuration/IConfigurationService';
import { configureInternationalization } from './i18n';
import { Container } from './Container';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import { AuthenticationProvider } from './core/authentication/AuthenticationProvider';

configureInternationalization();
const configurationService = Container.get<IConfigurationService>(IConfigurationServiceType);
const baseUrl = document.querySelector('base')?.getAttribute('href');

configurationService.load().then((configuration) => {
  ReactDOM.render(
    <React.StrictMode>
      <Index baseUrl={baseUrl || ''} configuration={configuration} />
    </React.StrictMode>,
    document.getElementById('root'),
  );
});

interface IndexProps {
  configuration: SpaSettings;
  baseUrl: string;
}

export const Index = ({ baseUrl, configuration }: IndexProps) => {
  return (
    <IoCProvider container={Container}>
      <Suspense fallback="Loading...">
        <AuthenticationProvider>
          <AppRouter />
        </AuthenticationProvider>
      </Suspense>
    </IoCProvider>
  );
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
reportWebVitals(console.log);

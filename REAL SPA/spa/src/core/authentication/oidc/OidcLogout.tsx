import React from 'react';
import { Loader, LoaderKind } from '../../../shared';
import { AuthenticationConsumer } from '../AuthenticationProvider';

export const OidcLogout = () => (
  <AuthenticationConsumer>
    {({ authService }) => {
      setTimeout(() => authService.logout(), 0);
      return <Loader loaderKind={LoaderKind.FullScreen} />;
    }}
  </AuthenticationConsumer>
);

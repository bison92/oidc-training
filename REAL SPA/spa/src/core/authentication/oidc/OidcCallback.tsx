import React from 'react';
import { AuthenticationConsumer } from '../AuthenticationProvider';
import { Loader, LoaderKind } from '../../../shared';

export const OidcCallback = () => {
  return (
    <AuthenticationConsumer>
      {({ authService }) => {
        setTimeout(() => authService.signinRedirectCallback(), 0);
        return <Loader loaderKind={LoaderKind.FullScreen} />;
      }}
    </AuthenticationConsumer>
  );
};

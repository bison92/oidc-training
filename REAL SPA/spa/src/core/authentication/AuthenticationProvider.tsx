import React, { PropsWithChildren, useEffect, useState } from 'react';
import { User } from "oidc-client";
import { IAuthenticationService, IAuthenticationServiceType } from "./IAuthenticationService";
import { useInjection } from '../ioc';

export type AuthenticationContextType = {
  authService: IAuthenticationService;
  user: User | null;
  loading: boolean;
};
const noop = () => {};


const AuthenticationContext = React.createContext<AuthenticationContextType>({
  authService: {
    logout: noop,
    load: () => Promise.resolve(),
    login: noop,
    signinRedirectCallback: noop,
    getUser: () => Promise.resolve(null),
  },
  user: null,
  loading: true,
});

export const AuthenticationConsumer = AuthenticationContext.Consumer;


export const AuthenticationProvider = (props: PropsWithChildren<{}>): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const authService = useInjection<IAuthenticationService>(IAuthenticationServiceType);

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      let user = await authService.getUser();
      console.log("Auth Provider:" + JSON.stringify(user));
      setUser(user);
      setLoading(false);
    };
    getUser();
  }, [authService, setUser]);

  return (
    <AuthenticationContext.Provider value={{ authService, user, loading }}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};

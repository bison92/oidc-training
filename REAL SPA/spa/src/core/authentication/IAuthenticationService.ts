import { User } from 'oidc-client';

export interface IAuthenticationService {
  load(): void;
  login(): void;
  logout(): void;
  signinRedirectCallback(): void;
  getUser(): Promise<User | null>;
}

export const IAuthenticationServiceType = Symbol.for('IAuthenticationService');


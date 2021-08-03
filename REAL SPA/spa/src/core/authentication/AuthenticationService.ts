import { injectable, inject } from 'inversify';
import { UserManager, Log } from 'oidc-client';
import { IAuthenticationService } from './IAuthenticationService';
import { IConfigurationService, IConfigurationServiceType } from '../configuration/IConfigurationService';


const scopes = ['openid', 'profile'];

@injectable()
export class AuthenticationService implements IAuthenticationService {

  @inject(IConfigurationServiceType) private _configurationService!: IConfigurationService;
  private userManager!: UserManager;

  load = () => {

    const configuration = this._configurationService.get().oidcSettings;

    this.userManager = new UserManager({
      authority: configuration.authority,
      client_id: configuration.clientId,
      response_type: 'code',
      scope: scopes.join(' '),
      redirect_uri: window.location.origin + '/signin-oidc',
      post_logout_redirect_uri: window.location.origin + '/signout-oidc',
      automaticSilentRenew: true,
      accessTokenExpiringNotificationTime: 600,
      silent_redirect_uri: window.location.origin + '/silent-renew-oidc',
    });

    Log.logger = console;
    Log.level = 3; //

    this.userManager.events.addUserLoaded((user) => {
      console.log("should redirect now");
      if (window.location.href.indexOf('signin-oidc') !== -1) {
        this.navigateToScreen();
      }
    });
  };

  triggerSilentSignin = async () => {
    return await this.userManager.signinSilent();
  };

  navigateToScreen = () => {
    window.location.replace('/dashboard');
  };

  login = () => {
    this.userManager.signinRedirect();
  };
  getUser = async () => {
    return this.userManager.getUser();
  };
  signinRedirectCallback = () => {
    this.userManager.signinRedirectCallback();
  };

  logout = () => {
    this.userManager.signoutRedirect();
    this.userManager.clearStaleState();
  };

  signoutRedirectCallback = () => {
    const publicUrl = this._configurationService.get().publicUrl;
    this.userManager.signoutRedirectCallback().then(() => {
      localStorage.clear();
      window.location.replace(publicUrl);
    });
    this.userManager.clearStaleState();
  };

  signinSilentCallback = () => {
    this.userManager.signinSilentCallback();
  };
}
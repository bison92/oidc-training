import { ContainerModule, interfaces } from 'inversify';
import { IConfigurationService, IConfigurationServiceType } from './configuration/IConfigurationService';
import { ConfigurationService } from './configuration/ConfigurationService';
import { IAuthenticationService, IAuthenticationServiceType } from './authentication/IAuthenticationService';
import { AuthenticationService } from './authentication/AuthenticationService';

export const CoreContainer = new ContainerModule((bind: interfaces.Bind) => {
    bind<IConfigurationService>(IConfigurationServiceType)
    .to(ConfigurationService)
    .inSingletonScope();

    bind<IAuthenticationService>(IAuthenticationServiceType)
    .to(AuthenticationService)
    .inSingletonScope()
    .onActivation((ctx, authserv) => {
      authserv.load();
      return authserv;
    });

});


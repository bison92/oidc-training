import { ContainerModule, interfaces } from 'inversify';
import { IConfigurationService, IConfigurationServiceType } from './configuration/IConfigurationService';
import { ConfigurationService } from './configuration/ConfigurationService';

export const CoreContainer = new ContainerModule((bind: interfaces.Bind) => {
    bind<IConfigurationService>(IConfigurationServiceType)
    .to(ConfigurationService)
    .inSingletonScope();

});


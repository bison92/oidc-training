export interface IConfigurationService {
  load(): Promise<SpaSettings>;
  get(): SpaSettings;
}

export interface SpaSettings {
  publicUrl: string;
  oidcSettings : OidcSettings;
}

export interface OidcSettings {
  authority: string;
  clientId: string;
}

const IConfigurationServiceType = Symbol.for('IConfigurationService');

export { IConfigurationServiceType };

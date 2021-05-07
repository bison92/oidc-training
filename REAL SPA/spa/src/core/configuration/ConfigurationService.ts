import { injectable } from "inversify";
import { IConfigurationService, SpaSettings } from "./IConfigurationService";

@injectable()
export class ConfigurationService implements IConfigurationService {
  configuration!: SpaSettings;

  async load(): Promise<SpaSettings> {
    const response = await fetch('/configuration');
    this.configuration = await response.json();
    return this.configuration;
  }

  get(): SpaSettings {
    if (!this.configuration) {
      throw new Error('Configuration is not loaded yet');
    }
    return this.configuration;
  }
}
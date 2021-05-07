import { Container as ContainerModule } from 'inversify';
import { CoreContainer } from './core/CoreContainer';

export const Container = new ContainerModule();
Container.load(CoreContainer);
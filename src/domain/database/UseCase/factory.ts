import { StartDatabaseUseCase } from './StartDatabseUseCase';
import { DatabaseServiceFactory } from '../Services/factory';

export class DatabaseUseCaseFactory {
  static startDatabaseUseCase = () =>
    new StartDatabaseUseCase({ service: DatabaseServiceFactory.startDatabaseService() });
}

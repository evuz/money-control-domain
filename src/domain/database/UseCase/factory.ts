import { StartDatabaseUseCase } from './StartDatabaseUseCase';
import { DatabaseServiceFactory } from '../Services/factory';

export class DatabaseUseCaseFactory {
  static startDatabaseUseCase = () =>
    new StartDatabaseUseCase({ service: DatabaseServiceFactory.startDatabaseService() });
}

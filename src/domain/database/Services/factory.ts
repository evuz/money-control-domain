import { StartDatabaseService } from './StartDatabaseService';
import { DatabaseRepositoryFactory } from '../Repositories/factory';

export class DatabaseServiceFactory {
  static startDatabaseService = () =>
    new StartDatabaseService({ repository: DatabaseRepositoryFactory.mongoDatabaseRepository() });
}

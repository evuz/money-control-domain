import { StartDatabaseService } from './StartDatabaseService';
import { DatabaseRepositoryFactory } from '../Repositories/factory';
import { IFactory } from '../../helpers/types';

export class DatabaseServiceFactory {
  static startDatabaseService = ({ config }: IFactory) =>
    new StartDatabaseService({ repository: DatabaseRepositoryFactory.mongoDatabaseRepository({ config }) });
}

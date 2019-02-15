import { StartDatabaseService } from './StartDatabaseService';
import { IFactory } from '../../helpers/types';
import { repositorySelector } from '../../RepositorySelector';

export class DatabaseServiceFactory {
  static startDatabaseService = ({ config }: IFactory) =>
    new StartDatabaseService({ repository: repositorySelector.database({ config }) });
}

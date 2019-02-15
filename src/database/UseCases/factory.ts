import { StartDatabaseUseCase } from './StartDatabaseUseCase';
import { DatabaseServiceFactory } from '../Services/factory';
import { IFactory } from '../../helpers/types';

export class DatabaseUseCaseFactory {
  static startDatabaseUseCase = ({ config }: IFactory) =>
    new StartDatabaseUseCase({ service: DatabaseServiceFactory.startDatabaseService({ config }) });
}

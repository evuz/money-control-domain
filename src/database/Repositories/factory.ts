import { MongoDatabaseRepository } from './MongoDatabaseRepository';
import { IFactory } from '../../helpers/types';

export class DatabaseRepositoryFactory {
  static mongoDatabaseRepository = ({  }: IFactory) => new MongoDatabaseRepository();
  static apiDatabaseRepository = ({  }: IFactory) => {
    throw Error(`ApiDatabaseRepository doesn't exist`);
  };
}

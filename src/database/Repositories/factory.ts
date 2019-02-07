import { MongoDatabaseRepository } from './MongoDatabaseRepository';

export class DatabaseRepositoryFactory {
  static mongoDatabaseRepository = () => new MongoDatabaseRepository();
}

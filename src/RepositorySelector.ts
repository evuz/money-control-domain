import { UsersRepositoryFactory } from './users/Repositories/factory';
import { ActivityRepositoryFactory } from './activity/Repositories/factory';
import { DatabaseRepositoryFactory } from './database/Repositories/factory';
import { DatabaseRepository } from './database/Repositories/DatabaseRepository';
import { IFactory } from './helpers/types';
import { ActivityRepository } from './activity/Repositories/ActivityRepository';
import { UsersRepository } from './users/Repositories/UsersRepository';

type RepositoriesType = 'api' | 'mongo';
type RepositoryTypeOf = 'user' | 'database' | 'activity';

export class RepositorySelector {
  private repositorySelected: RepositoriesType;
  private apiRepository = {
    activity: ActivityRepositoryFactory.apiActivityRepository,
    database: DatabaseRepositoryFactory.apiDatabaseRepository,
    user: UsersRepositoryFactory.apiUsersRepository,
  };
  private mongoRepository = {
    activity: ActivityRepositoryFactory.mongoActivityRepository,
    database: DatabaseRepositoryFactory.mongoDatabaseRepository,
    user: UsersRepositoryFactory.mongoUsersRepository,
  };

  public get activity(): (arg: IFactory) => ActivityRepository {
    return this.getRepository('activity');
  }

  public get database(): (arg: IFactory) => DatabaseRepository {
    return this.getRepository('database');
  }

  public get user(): (arg: IFactory) => UsersRepository {
    return this.getRepository('user');
  }

  public select({ repository }: { repository: RepositoriesType }) {
    this.repositorySelected = repository;
  }

  private getRepository(type: RepositoryTypeOf) {
    switch (this.repositorySelected) {
      case 'api':
        return <any>this.apiRepository[type];
      case 'mongo':
        return this.mongoRepository[type];
      default:
        throw Error('RepositorySelector you must select a repository to use');
    }
  }
}

export const repositorySelector = new RepositorySelector();

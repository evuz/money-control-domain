import { createConnection } from 'typeorm';

import { DatabaseRepository } from './DatabaseRepository';
import { Activity } from '../../activity/Repositories/MongoActivityRepository/Activity.entity';
import { User } from '../../users/Repositories/MongoUsersRepository/User.entity';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';
import { Config } from '../Entities/Config';

export class MongoDatabaseRepository extends DatabaseRepository {
  private get ormConfig(): MongoConnectionOptions {
    return {
      type: 'mongodb',
      synchronize: true,
      logging: false,
      useNewUrlParser: true,
      entities: [Activity, User],
    };
  }

  start = ({ config }: { config: Config }) => {
    const ormConfig = {
      ...config,
      ...this.ormConfig,
    };
    return createConnection(ormConfig);
  };
}

import { createConnection } from 'typeorm';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';

import { DatabaseRepository } from './DatabaseRepository';
import { Config } from '../Entities/Config';
import { Activity } from '../../activity/Repositories/MongoActivityRepository/Activity.entity';
import { User } from '../../users/Repositories/MongoUsersRepository/User.entity';
import { TelegramUser } from '../../users/Repositories/MongoUsersRepository/TelegramUser.entity';
import { TelegramBotUser } from '../../users/Repositories/MongoUsersRepository/TelegramBotUser.entity';

export class MongoDatabaseRepository extends DatabaseRepository {
  private get ormConfig(): MongoConnectionOptions {
    return {
      type: 'mongodb',
      synchronize: true,
      logging: false,
      useNewUrlParser: true,
      entities: [Activity, User, TelegramUser, TelegramBotUser],
    };
  }

  start = ({ config }: { config: Config }) => {
    const ormConfig = {
      ...config.get(),
      ...this.ormConfig,
    };
    return createConnection(ormConfig);
  };
}

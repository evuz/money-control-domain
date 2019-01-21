import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';

import { config } from './config';

const ormConfig: MongoConnectionOptions = {
  type: 'mongodb',
  synchronize: true,
  logging: false,
  useNewUrlParser: true,
  entities: ['src/domain/**/*.entity.ts'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
};

export function getOrmConfig(): Promise<MongoConnectionOptions> {
  return Promise.resolve({
    ...ormConfig,
    url: config.db_url,
    username: config.db_username,
    password: config.db_password,
    database: config.db_database,
    host: config.db_host,
    port: config.db_port,
  });
}

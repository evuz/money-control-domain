import { IService } from 'ts-domain';

import { DatabaseRepository } from '../Repositories/DatabaseRepository';
import { Config, ConfigURL, ConfigCredential } from '../Entities/Config';

export class StartDatabaseService implements IService {
  private repository: DatabaseRepository;
  private get config(): ConfigURL | ConfigCredential {
    const url = process.env.MONGO_URL;
    if (url) {
      return { url };
    }
    return {
      username: process.env.MONGO_USERNAME,
      password: process.env.MONGO_PASSWORD,
      database: process.env.MONGO_DB,
      host: process.env.MONGO_HOST,
      port: +process.env.MONGO_PORT,
    };
  }

  constructor({ repository }: { repository: DatabaseRepository }) {
    this.repository = repository;
  }

  execute() {
    return this.repository.start(new Config({ config: this.config }));
  }
}

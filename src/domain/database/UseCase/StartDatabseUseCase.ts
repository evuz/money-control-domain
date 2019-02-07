import { IUseCase } from 'ts-domain';

import { StartDatabaseService } from '../Services/StartDatabaseService';
import { Config } from '../Entities/Config';

export class StartDatabaseUseCase implements IUseCase {
  private service: StartDatabaseService;

  constructor({ service }: { service: StartDatabaseService }) {
    this.service = service;
  }

  execute() {
    return this.service.execute();
  }
}

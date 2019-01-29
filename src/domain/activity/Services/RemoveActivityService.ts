import { IService } from 'ts-domain';

import { ActivityRepository } from '../Repositories/ActivityRepository';
import { IRemoveActivityService } from './types';

export class RemoveActivityService implements IService {
  private repository: ActivityRepository;

  constructor({ repository }: IRemoveActivityService) {
    this.repository = repository;
  }

  execute({ id }: { id: string }) {
    return this.repository.removeActivity({ id });
  }
}

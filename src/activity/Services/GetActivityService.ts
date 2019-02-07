import { IService } from 'ts-domain';

import { ActivityRepository } from '../Repositories/ActivityRepository';
import { IGetActivityService } from './types';

export class GetActivityService implements IService {
  private repository: ActivityRepository;

  constructor({ repository }: IGetActivityService) {
    this.repository = repository;
  }

  execute({ id }: { id: string }) {
    return this.repository.getActivity({ id });
  }
}

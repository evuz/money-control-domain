import { IService } from 'ts-domain';

import { ActivityRepository } from '../Repositories/ActivityRepository';
import { Activity } from '../Entities/Activity';
import { IGetActivitiesByUserIdService } from './types';

export class GetActivitiesService implements IService {
  private repository: ActivityRepository;

  constructor({ repository }: IGetActivitiesByUserIdService) {
    this.repository = repository;
  }

  execute({ user }: { user: Activity['user'] }) {
    return this.repository.getActivities({ user });
  }
}

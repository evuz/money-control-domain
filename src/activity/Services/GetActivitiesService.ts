import { IService } from 'ts-domain';

import { ActivityRepository } from '../Repositories/ActivityRepository';
import { Activity } from '../Entities/Activity';
import { IGetActivitiesService } from './types';

export class GetActivitiesService implements IService {
  private repository: ActivityRepository;

  constructor({ repository }: IGetActivitiesService) {
    this.repository = repository;
  }

  execute({ user }: { user: Activity['user'] }) {
    return this.repository.getActivities({ user }).then(({ results, total }) => {
      const activities = results.map(activity => activity.flat());
      return { total, results: activities };
    });
  }
}

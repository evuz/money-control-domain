import { IService } from 'ts-domain';

import { ActivityRepository, IGetActivitiesByMonth } from '../Repositories/ActivityRepository';
import { IGetActivitiesByMonthService } from './types';

export class GetActivitiesByMonthService implements IService {
  private repository: ActivityRepository;

  constructor({ repository }: IGetActivitiesByMonthService) {
    this.repository = repository;
  }

  execute({ user, date, take, page }: IGetActivitiesByMonth) {
    return this.repository.getActivitiesByMonth({ user, date, take, page });
  }
}

import { IService, IUseCase } from 'ts-domain';

import { IGetActivitiesByMonthUseCase } from './types';
import { IGetActivitiesByMonth, IGetActivities } from '../Repositories/ActivityRepository';

export class GetActivitiesByMonthUseCase implements IUseCase {
  private service: IService;

  constructor({ service }: IGetActivitiesByMonthUseCase) {
    this.service = service;
  }

  execute({ userId, date }: IGetActivitiesByMonth): Promise<IGetActivities> {
    return this.service.execute({ userId, date });
  }
}

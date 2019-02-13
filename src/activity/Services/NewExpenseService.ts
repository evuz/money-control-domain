import { IService } from 'ts-domain';

import { ActivityRepository } from '../Repositories/ActivityRepository';
import { ActivityWithoutId, Activity } from '../Entities/Activity';
import { INewExpenseService } from './types';

export class NewExpenseService implements IService {
  private repository: ActivityRepository;

  constructor({ repository }: INewExpenseService) {
    this.repository = repository;
  }

  execute({ activity: { amount, ...rest } }: { activity: ActivityWithoutId }) {
    const activity = {
      ...rest,
      amount: amount > 0 ? -amount : amount,
    };
    return this.repository.newActivity({ activity: new Activity(activity) });
  }
}

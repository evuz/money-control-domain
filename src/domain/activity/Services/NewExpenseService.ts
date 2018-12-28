import { IService } from 'ts-domain';

import { ActivityRepository } from '../Repositories/ActivityRepository';
import { Activity } from '../Entities/Activity';
import { INewExpense } from './interfaces';

export class NewExpenseService implements IService {
  private repository: ActivityRepository;

  constructor({ repository }: INewExpense) {
    this.repository = repository;
  }

  execute({ activity: { amount, ...rest } }: { activity: Activity }) {
    const activity = {
      ...rest,
      amount: amount > 0 ? -amount : amount,
    };
    return this.repository.newActivity({ activity: new Activity(activity) });
  }
}

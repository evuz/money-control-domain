import { IUseCase } from 'ts-domain';

import { INewExpenseUseCase } from './types';
import { ActivityWithoutId } from '../Entities/Activity';
import { NewExpenseService } from '../Services/NewExpenseService';

export class NewExpenseUseCase implements IUseCase {
  private service: NewExpenseService;

  constructor({ service }: INewExpenseUseCase) {
    this.service = service;
  }

  execute({ activity }: { activity: ActivityWithoutId }) {
    return this.service.execute({ activity });
  }
}

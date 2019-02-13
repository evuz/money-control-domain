import { IUseCase } from 'ts-domain';

import { INewIncomeUseCase } from './types';
import { ActivityWithoutId } from '../Entities/Activity';
import { NewIncomeService } from '../Services/NewIncomeService';

export class NewIncomeUseCase implements IUseCase {
  private service: NewIncomeService;

  constructor({ service }: INewIncomeUseCase) {
    this.service = service;
  }

  execute({ activity }: { activity: ActivityWithoutId }) {
    return this.service.execute({ activity });
  }
}

import { IUseCase } from 'ts-domain';

import { INewIncomeByTelegramIdUseCase } from './types';
import { NewIncomeByTelegramIdService } from '../Services/NewIncomeByTelegramIdService';
import { ActivityWithoutUser } from '../Services/types';

export class NewIncomeByTelegramIdUseCase implements IUseCase {
  private service: NewIncomeByTelegramIdService;

  constructor({ service }: INewIncomeByTelegramIdUseCase) {
    this.service = service;
  }

  execute({ activity, telegramId }: { activity: ActivityWithoutUser; telegramId: string }) {
    return this.service.execute({ activity, telegramId });
  }
}

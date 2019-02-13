import { IUseCase } from 'ts-domain';

import { INewExpenseByTelegramIdUseCase } from './types';
import { ActivityWithoutUser } from '../Services/types';
import { NewExpenseByTelegramIdService } from '../Services/NewExpenseByTelegramIdService';

export class NewExpenseByTelegramIdUseCase implements IUseCase {
  private service: NewExpenseByTelegramIdService;

  constructor({ service }: INewExpenseByTelegramIdUseCase) {
    this.service = service;
  }

  execute({ activity, telegramId }: { activity: ActivityWithoutUser; telegramId: string }) {
    return this.service.execute({ activity, telegramId });
  }
}

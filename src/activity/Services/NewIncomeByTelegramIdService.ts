import { IService } from 'ts-domain';

import { ActivityWithoutUser, INewIncomeByTelegramIdService } from './types';
import { ActivityByTelegramIdService } from './ActivityByTelegramIdService';
import { NewIncomeService } from './NewIncomeService';

export class NewIncomeByTelegramIdService extends ActivityByTelegramIdService implements IService {
  private service: NewIncomeService;

  constructor({ userService, service }: INewIncomeByTelegramIdService) {
    super({ userService });
    this.service = service;
  }

  async execute({ telegramId, activity: act }: { telegramId: string; activity: ActivityWithoutUser }) {
    const user = await this.getUser({ telegramId });
    const activity = {
      ...act,
      user: user.id,
    };
    return this.service.execute({ activity });
  }
}

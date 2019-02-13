import { IService } from 'ts-domain';

import { INewExpenseByTelegramIdService, ActivityWithoutUser } from './types';
import { ActivityByTelegramIdService } from './ActivityByTelegramIdService';
import { NewExpenseService } from './NewExpenseService';

export class NewExpenseByTelegramIdService extends ActivityByTelegramIdService implements IService {
  private service: NewExpenseService;

  constructor({ userService, service }: INewExpenseByTelegramIdService) {
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

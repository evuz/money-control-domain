import { IService } from 'ts-domain';

import { IGetActivitiesByTelegramIdMonthService, IGetActivitiesByTelegramIdMonth } from './types';
import { ActivityByTelegramIdService } from './ActivityByTelegramIdService';
import { GetActivitiesByMonthService } from './GetActivitiesByMonthService';

export class GetActivitiesByTelegramIdMonthService extends ActivityByTelegramIdService implements IService {
  private service: GetActivitiesByMonthService;

  constructor({ userService, service }: IGetActivitiesByTelegramIdMonthService) {
    super({ userService });
    this.service = service;
  }

  async execute({ telegramId, page, date, take }: IGetActivitiesByTelegramIdMonth) {
    const user = await this.getUser({ telegramId });
    return this.service.execute({ date, take, page, user: user.id });
  }
}

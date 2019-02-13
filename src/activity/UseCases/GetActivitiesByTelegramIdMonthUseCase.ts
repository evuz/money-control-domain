import { IUseCase } from 'ts-domain';

import { IGetActivitiesByTelegramIdMonthUseCase } from './types';
import { GetActivitiesByTelegramIdMonthService } from '../Services/GetActivitiesByTelegramIdMonthService';
import { IGetActivitiesByTelegramIdMonth } from '../Services/types';

export class GetActivitiesByTelegramIdMonthUseCase implements IUseCase {
  private service: GetActivitiesByTelegramIdMonthService;

  constructor({ service }: IGetActivitiesByTelegramIdMonthUseCase) {
    this.service = service;
  }

  execute({ telegramId, date }: IGetActivitiesByTelegramIdMonth) {
    return this.service.execute({ telegramId, date });
  }
}

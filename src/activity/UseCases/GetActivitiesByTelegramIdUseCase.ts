import { IUseCase } from 'ts-domain';

import { IGetActivitiesByTelegramIdUseCase } from './types';
import { GetActivitiesByTelegramIdService } from '../Services/GetActivitiesByTelegramIdService';

export class GetActivitiesByTelegramIdUseCase implements IUseCase {
  private service: GetActivitiesByTelegramIdService;

  constructor({ service }: IGetActivitiesByTelegramIdUseCase) {
    this.service = service;
  }

  execute({ telegramId }: { telegramId: string }) {
    return this.service.execute({ telegramId });
  }
}

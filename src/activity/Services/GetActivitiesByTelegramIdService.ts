import { IService } from 'ts-domain';

import { IGetActivitiesByTelegramIdService } from './types';
import { ActivityByTelegramIdService } from './ActivityByTelegramIdService';
import { GetActivitiesService } from './GetActivitiesService';

export class GetActivitiesByTelegramIdService extends ActivityByTelegramIdService implements IService {
  private service: GetActivitiesService;

  constructor({ userService, service }: IGetActivitiesByTelegramIdService) {
    super({ userService });
    this.service = service;
  }

  async execute({ telegramId }: { telegramId: string }) {
    const user = await this.getUser({ telegramId });
    return this.service.execute({ user: user.id });
  }
}

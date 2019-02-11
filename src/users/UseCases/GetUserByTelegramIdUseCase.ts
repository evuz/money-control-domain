import { IUseCase } from 'ts-domain';

import { IGetUserByTelegramIdUseCase } from './types';
import { GetUserByTelegramIdService } from '../Services/GetUserByTelegramIdService';

export class GetAllUsersUseCase implements IUseCase {
  private service: GetUserByTelegramIdService;

  constructor({ service }: IGetUserByTelegramIdUseCase) {
    this.service = service;
  }

  execute({ telegramId }: { telegramId: string }) {
    return this.service.execute({ telegramId });
  }
}

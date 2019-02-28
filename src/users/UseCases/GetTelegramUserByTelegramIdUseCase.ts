import { IUseCase } from 'ts-domain';

import { IGetTelegramUserByTelegramIdUseCase } from './types';
import { GetTelegramUserByTelegramIdService } from '../Services/GetTelegramUserByTelegramIdService';

export class GetTelegramUserByTelegramIdUseCase implements IUseCase {
  private service: GetTelegramUserByTelegramIdService;

  constructor({ service }: IGetTelegramUserByTelegramIdUseCase) {
    this.service = service;
  }

  execute({ telegramId }: { telegramId: string }) {
    return this.service.execute({ telegramId });
  }
}

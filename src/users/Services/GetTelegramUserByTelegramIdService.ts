import { IService } from 'ts-domain';

import { UsersRepository } from '../Repositories/UsersRepository';
import { IGetTelegramUserByTelegramIdService } from './types';
import { TelegramUser } from '../Entities/TelegramUser';

export class GetTelegramUserByTelegramIdService implements IService {
  private repository: UsersRepository;

  constructor({ repository }: IGetTelegramUserByTelegramIdService) {
    this.repository = repository;
  }

  execute({ telegramId }: { telegramId: string }): Promise<TelegramUser> {
    return this.repository.getTelegramUserByTelegramId({ telegramId }).then(user => user.flat());
  }
}

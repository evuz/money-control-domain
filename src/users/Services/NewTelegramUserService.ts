import { IService } from 'ts-domain';

import { UsersRepository } from '../Repositories/UsersRepository';
import { INewTelegramUserService } from './types';
import { TelegramUserEntity, TelegramUser, TelegramUserWithoutId } from '../Entities/TelegramUser';

export class NewTelegramUserService implements IService {
  private repository: UsersRepository;

  constructor({ repository }: INewTelegramUserService) {
    this.repository = repository;
  }

  execute({ user }: { user: TelegramUserWithoutId }): Promise<TelegramUser> {
    return this.repository.newTelegramUser({ user: new TelegramUserEntity(user) }).then(u => u.flat());
  }
}

import { IService } from 'ts-domain';

import { UsersRepository } from '../Repositories/UsersRepository';
import { INewTelegramBotUserService } from './types';
import { TelegramBotUserEntity, TelegramBotUser, TelegramBotUserWithoutId } from '../Entities/TelegramBotUser';

export class NewTelegramBotUserService implements IService {
  private repository: UsersRepository;

  constructor({ repository }: INewTelegramBotUserService) {
    this.repository = repository;
  }

  execute({ user, password }: { user: TelegramBotUserWithoutId; password: string }): Promise<TelegramBotUser> {
    return this.repository.newTelegramBotUser({ password, user: new TelegramBotUserEntity(user) }).then(u => u.flat());
  }
}

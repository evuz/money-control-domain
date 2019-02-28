import { IService } from 'ts-domain';

import { UsersRepository } from '../Repositories/UsersRepository';
import { IGetTelegramUserService } from './types';
import { TelegramUser } from '../Entities/TelegramUser';

export class GetTelegramUserService implements IService {
  private repository: UsersRepository;

  constructor({ repository }: IGetTelegramUserService) {
    this.repository = repository;
  }

  execute({ id }: { id: string }): Promise<TelegramUser> {
    return this.repository.getTelegramUser({ id }).then(user => user.flat());
  }
}

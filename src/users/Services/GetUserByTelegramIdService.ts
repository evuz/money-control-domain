import { IService } from 'ts-domain';

import { UsersRepository } from '../Repositories/UsersRepository';
import { IGetAllUsersService } from './types';

export class GetUserByTelegramIdService implements IService {
  private repository: UsersRepository;

  constructor({ repository }: IGetAllUsersService) {
    this.repository = repository;
  }

  execute({ telegramId }: { telegramId: string }) {
    return this.repository.getUserByTelegramId({ telegramId });
  }
}

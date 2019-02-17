import { IService } from 'ts-domain';

import { UsersRepository } from '../Repositories/UsersRepository';
import { IGetAllUsersService } from './types';
import { User } from '../Entities';

export class GetAllUsersService implements IService {
  private repository: UsersRepository;

  constructor({ repository }: IGetAllUsersService) {
    this.repository = repository;
  }

  execute(): Promise<User[]> {
    return this.repository.getAllUsers().then(users => users.map(user => user.flat()));
  }
}

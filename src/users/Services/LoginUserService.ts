import { IService } from 'ts-domain';

import { UsersRepository, ILoginUserByUsername, ILoginUserByEmail } from '../Repositories/UsersRepository';
import { ILoginUserService } from './types';
import { User } from '../Entities/User';

export class LoginUserService implements IService {
  private repository: UsersRepository;

  constructor({ repository }: ILoginUserService) {
    this.repository = repository;
  }

  execute(opts: ILoginUserByUsername | ILoginUserByEmail): Promise<User> {
    return this.repository.loginUser(opts).then(user => user.flat());
  }
}

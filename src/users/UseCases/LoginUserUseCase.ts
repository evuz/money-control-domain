import { IUseCase } from 'ts-domain';

import { ILoginUserUseCase } from './types';
import { LoginUserService } from '../Services/LoginUserService';
import { ILoginUserByUsername, ILoginUserByEmail } from '../Repositories/UsersRepository';

export class LoginUserUseCase implements IUseCase {
  private service: LoginUserService;

  constructor({ service }: ILoginUserUseCase) {
    this.service = service;
  }

  execute(opts: ILoginUserByUsername | ILoginUserByEmail) {
    return this.service.execute(opts);
  }
}

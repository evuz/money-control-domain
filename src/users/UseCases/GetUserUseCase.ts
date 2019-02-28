import { IUseCase } from 'ts-domain';

import { IGetUserUseCase } from './types';
import { GetUserService } from '../Services/GetUserService';
import { User } from '../Entities';

export class GetUserUseCase implements IUseCase {
  private service: GetUserService;

  constructor({ service }: IGetUserUseCase) {
    this.service = service;
  }

  execute(opts: { username: User['username'] } | { email: User['email'] }) {
    return this.service.execute(opts);
  }
}

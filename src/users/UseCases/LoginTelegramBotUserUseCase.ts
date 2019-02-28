import { IUseCase } from 'ts-domain';

import { ILoginTelegramBotUserUseCase } from './types';
import { LoginTelegramBotUserService } from '../Services/LoginTelegramBotUserService';

export class LoginTelegramBotUserUseCase implements IUseCase {
  private service: LoginTelegramBotUserService;

  constructor({ service }: ILoginTelegramBotUserUseCase) {
    this.service = service;
  }

  execute(opts: { username: string; password: string }) {
    return this.service.execute(opts);
  }
}

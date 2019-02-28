import { IUseCase } from 'ts-domain';

import { IGetTelegramUserUseCase } from './types';
import { GetTelegramUserService } from '../Services/GetTelegramUserService';

export class GetTelegramUserUseCase implements IUseCase {
  private service: GetTelegramUserService;

  constructor({ service }: IGetTelegramUserUseCase) {
    this.service = service;
  }

  execute({ id }: { id: string }) {
    return this.service.execute({ id });
  }
}

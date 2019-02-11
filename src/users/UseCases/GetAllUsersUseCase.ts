import { IUseCase } from 'ts-domain';

import { IGetAllUsersUseCase } from './types';
import { GetAllUsersService } from '../Services/GetAllUsersService';

export class GetAllUsersUseCase implements IUseCase {
  private service: GetAllUsersService;

  constructor({ service }: IGetAllUsersUseCase) {
    this.service = service;
  }

  execute() {
    return this.service.execute();
  }
}

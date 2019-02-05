import { IUseCase } from 'ts-domain';

import { IGetActivityUseCase } from './types';
import { GetActivityService } from '../Services/GetActivityService';

export class GetActivityUseCase implements IUseCase {
  private service: GetActivityService;

  constructor({ service }: IGetActivityUseCase) {
    this.service = service;
  }

  execute({ id }: { id: string }) {
    return this.service.execute({ id });
  }
}

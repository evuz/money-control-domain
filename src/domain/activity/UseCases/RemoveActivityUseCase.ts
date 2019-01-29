import { IUseCase } from 'ts-domain';

import { IRemoveActivityUseCase } from './types';
import { RemoveActivityService } from '../Services/RemoveActivityService';

export class RemoveActivityUseCase implements IUseCase {
  private service: RemoveActivityService;

  constructor({ service }: IRemoveActivityUseCase) {
    this.service = service;
  }

  execute({ id }: { id: string }) {
    return this.service.execute({ id });
  }
}

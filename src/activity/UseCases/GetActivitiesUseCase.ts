import { IUseCase } from 'ts-domain';

import { IGetActivitiesUseCase } from './types';
import { Activity } from '../Entities/Activity';
import { GetActivitiesService } from '../Services/GetActivitiesService';

export class GetActivitiesUseCase implements IUseCase {
  private service: GetActivitiesService;

  constructor({ service }: IGetActivitiesUseCase) {
    this.service = service;
  }

  execute({ user }: { user: Activity['user'] }) {
    return this.service.execute({ user });
  }
}

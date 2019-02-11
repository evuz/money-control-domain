import { IUseCase } from 'ts-domain';

import { IGetActivitiesByUserIdUseCase } from './types';
import { Activity } from '../Entities/Activity';
import { GetActivitiesService } from '../Services/GetActivitiesService';

export class GetActivitiesByUserIdUseCase implements IUseCase {
  private service: GetActivitiesService;

  constructor({ service }: IGetActivitiesByUserIdUseCase) {
    this.service = service;
  }

  execute({ user }: { user: Activity['user'] }) {
    return this.service.execute({ user });
  }
}

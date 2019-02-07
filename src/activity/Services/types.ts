import { ActivityRepository } from '../Repositories/ActivityRepository';

export interface IActivityService {
  repository: ActivityRepository;
}

export interface INewExpenseService extends IActivityService {}
export interface IGetActivityService extends IActivityService {}
export interface IGetActivitiesByUserIdService extends IActivityService {}
export interface IGetActivitiesByMonthService extends IActivityService {}
export interface IRemoveActivityService extends IActivityService {}

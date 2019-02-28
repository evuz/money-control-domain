import { ActivityRepository, IGetActivitiesByMonth } from '../Repositories/ActivityRepository';
import { GetTelegramUserByTelegramIdService } from '../../users/Services/GetTelegramUserByTelegramIdService';
import { NewExpenseService } from './NewExpenseService';
import { NewIncomeService } from './NewIncomeService';
import { GetActivitiesService } from './GetActivitiesService';
import { GetActivitiesByMonthService } from './GetActivitiesByMonthService';
import { ActivityWithoutId } from '../Entities';

export interface IActivityService {
  repository: ActivityRepository;
}
export interface INewExpenseService extends IActivityService {}
export interface INewIncomeService extends IActivityService {}
export interface IGetActivityService extends IActivityService {}
export interface IGetActivitiesService extends IActivityService {}
export interface IGetActivitiesByMonthService extends IActivityService {}
export interface IRemoveActivityService extends IActivityService {}

export interface IActivityByTelegramIdService {
  userService: GetTelegramUserByTelegramIdService;
}
export interface INewExpenseByTelegramIdService extends IActivityByTelegramIdService {
  service: NewExpenseService;
}
export interface INewIncomeByTelegramIdService extends IActivityByTelegramIdService {
  service: NewIncomeService;
}
export interface IGetActivitiesByTelegramIdService extends IActivityByTelegramIdService {
  service: GetActivitiesService;
}
export interface IGetActivitiesByTelegramIdMonthService extends IActivityByTelegramIdService {
  service: GetActivitiesByMonthService;
}

type IGetActivitiesByMonthWithoutUser = Pick<IGetActivitiesByMonth, Exclude<keyof IGetActivitiesByMonth, 'user'>>;
export interface IGetActivitiesByTelegramIdMonth extends IGetActivitiesByMonthWithoutUser {
  telegramId: string;
}

export type ActivityWithoutUser = Pick<ActivityWithoutId, Exclude<keyof ActivityWithoutId, 'user'>>;

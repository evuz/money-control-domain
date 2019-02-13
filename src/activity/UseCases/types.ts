import { NewExpenseService } from '../Services/NewExpenseService';
import { GetActivitiesService } from '../Services/GetActivitiesService';
import { GetActivitiesByMonthService } from '../Services/GetActivitiesByMonthService';
import { NewIncomeService } from '../Services/NewIncomeService';
import { RemoveActivityService } from '../Services/RemoveActivityService';
import { GetActivityService } from '../Services/GetActivityService';
import { GetActivitiesByTelegramIdService } from '../Services/GetActivitiesByTelegramIdService';
import { GetActivitiesByTelegramIdMonthService } from '../Services/GetActivitiesByTelegramIdMonthService';
import { NewExpenseByTelegramIdService } from '../Services/NewExpenseByTelegramIdService';
import { NewIncomeByTelegramIdService } from '../Services/NewIncomeByTelegramIdService';

export interface INewExpenseUseCase {
  service: NewExpenseService;
}
export interface INewExpenseByTelegramIdUseCase {
  service: NewExpenseByTelegramIdService;
}
export interface INewIncomeUseCase {
  service: NewIncomeService;
}
export interface INewIncomeByTelegramIdUseCase {
  service: NewIncomeByTelegramIdService;
}
export interface IGetActivityUseCase {
  service: GetActivityService;
}
export interface IGetActivitiesUseCase {
  service: GetActivitiesService;
}
export interface IGetActivitiesByTelegramIdUseCase {
  service: GetActivitiesByTelegramIdService;
}
export interface IGetActivitiesByMonthUseCase {
  service: GetActivitiesByMonthService;
}
export interface IGetActivitiesByTelegramIdMonthUseCase {
  service: GetActivitiesByTelegramIdMonthService;
}
export interface IGetActivitiesByMonthPaginatedUseCase extends IGetActivitiesByMonthUseCase {}
export interface IGetActivitiesByTelegramIdMonthPaginatedUseCase extends IGetActivitiesByTelegramIdMonthUseCase {}
export interface IRemoveActivityUseCase {
  service: RemoveActivityService;
}

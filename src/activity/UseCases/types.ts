import { NewExpenseService } from '../Services/NewExpenseService';
import { GetActivitiesByUserIdService } from '../Services/GetActivitiesByUserIdService';
import { GetActivitiesByMonthService } from '../Services/GetActivitiesByMonthService';
import { NewIncomeService } from '../Services/NewIncomeService';
import { RemoveActivityService } from '../Services/RemoveActivityService';
import { GetActivityService } from '../Services/GetActivityService';

export interface INewExpenseUseCase {
  service: NewExpenseService;
}
export interface INewIncomeUseCase {
  service: NewIncomeService;
}
export interface IGetActivityUseCase {
  service: GetActivityService;
}
export interface IGetActivitiesByUserIdUseCase {
  service: GetActivitiesByUserIdService;
}
export interface IGetActivitiesByMonthUseCase {
  service: GetActivitiesByMonthService;
}
export interface IGetActivitiesByMonthPaginatedUseCase extends IGetActivitiesByMonthUseCase {}
export interface IRemoveActivityUseCase {
  service: RemoveActivityService;
}

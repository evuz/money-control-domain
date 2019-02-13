import { NewExpenseUseCase } from './NewExpenseUseCase';
import { NewIncomeUseCase } from './NewIncomeUseCase';
import { ActivityServiceFactory } from '../Services/factory';
import { GetActivitiesUseCase } from './GetActivitiesUseCase';
import { GetActivitiesByTelegramIdUseCase } from './GetActivitiesByTelegramIdUseCase';
import { GetActivityUseCase } from './GetActivityUseCase';
import { GetActivitiesByMonthUseCase } from './GetActivitiesByMonthUseCase';
import { GetActivitiesByMonthPaginatedUseCase } from './GetActivitiesByMonthPaginatedUseCase';
import { RemoveActivityUseCase } from './RemoveActivityUseCase';
import { NewExpenseByTelegramIdUseCase } from './NewExpenseByTelegramIdUseCase';
import { NewIncomeByTelegramIdUseCase } from './NewIncomeByTelegramIdUseCase';
import { GetActivitiesByTelegramIdMonthUseCase } from './GetActivitiesByTelegramIdMonthUseCase';
import { GetActivitiesByTelegramIdMonthPaginatedUseCase } from './GetActivitiesByTelegramIdMonthPaginatedUseCase';

export class ActivityUseCaseFactory {
  static newExpenseUseCase = () => new NewExpenseUseCase({ service: ActivityServiceFactory.newExpenseService() });
  static newExpenseByTelegramIdUseCase = () =>
    new NewExpenseByTelegramIdUseCase({ service: ActivityServiceFactory.newExpenseByTelegramIdService() });
  static newIncomeUseCase = () => new NewIncomeUseCase({ service: ActivityServiceFactory.newIncomeService() });
  static newIncomeByTelegramIdUseCase = () =>
    new NewIncomeByTelegramIdUseCase({ service: ActivityServiceFactory.newIncomeByTelegramIdService() });
  static getActivityUseCase = () => new GetActivityUseCase({ service: ActivityServiceFactory.getActivityService() });
  static getActivitiesUseCase = () =>
    new GetActivitiesUseCase({ service: ActivityServiceFactory.getActivitiesService() });
  static getActivitiesByTelegramIdUseCase = () =>
    new GetActivitiesByTelegramIdUseCase({ service: ActivityServiceFactory.getActivitiesByTelegramIdService() });
  static getActivitiesByMonthUseCase = () =>
    new GetActivitiesByMonthUseCase({ service: ActivityServiceFactory.getActivitiesByMonthService() });
  static getActivitiesByTelegramIdMonthUseCase = () =>
    new GetActivitiesByTelegramIdMonthUseCase({
      service: ActivityServiceFactory.getActivitiesByTelegramIdMonthService(),
    });
  static getActivitiesByMonthPaginatedUseCase = () =>
    new GetActivitiesByMonthPaginatedUseCase({ service: ActivityServiceFactory.getActivitiesByMonthService() });
  static getActivitiesByTelegramIdMonthPaginatedUseCase = () =>
    new GetActivitiesByTelegramIdMonthPaginatedUseCase({
      service: ActivityServiceFactory.getActivitiesByTelegramIdMonthService(),
    });
  static removeActivityUseCase = () =>
    new RemoveActivityUseCase({ service: ActivityServiceFactory.removeActivityService() });
}

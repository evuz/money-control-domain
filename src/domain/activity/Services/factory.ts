import { NewExpenseService } from './NewExpenseService';
import { NewIncomeService } from './NewIncomeService';
import { ActivityRepositoryFactory } from '../Repositories/factory';
import { GetActivitiesByUserIdService } from './GetActivitiesByUserIdService';
import { GetActivitiesByMonthService } from './GetActivitiesByMonthService';
import { RemoveActivityService } from './RemoveActivityService';
import { GetActivityService } from './GetActivityService';

export class ActivityServiceFactory {
  static newExpenseService = () =>
    new NewExpenseService({ repository: ActivityRepositoryFactory.mongoActivityRepository() });
  static newIncomeService = () =>
    new NewIncomeService({ repository: ActivityRepositoryFactory.mongoActivityRepository() });
  static getActivityService = () =>
    new GetActivityService({ repository: ActivityRepositoryFactory.mongoActivityRepository() });
  static getActivitiesByUserIdService = () =>
    new GetActivitiesByUserIdService({ repository: ActivityRepositoryFactory.mongoActivityRepository() });
  static getActivitiesByMonthService = () =>
    new GetActivitiesByMonthService({ repository: ActivityRepositoryFactory.mongoActivityRepository() });
  static removeActivityService = () =>
    new RemoveActivityService({ repository: ActivityRepositoryFactory.mongoActivityRepository() });
}

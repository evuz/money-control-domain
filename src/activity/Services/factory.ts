import { NewExpenseService } from './NewExpenseService';
import { NewIncomeService } from './NewIncomeService';
import { ActivityRepositoryFactory } from '../Repositories/factory';
import { GetActivitiesService } from './GetActivitiesService';
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
  static getActivitiesService = () =>
    new GetActivitiesService({ repository: ActivityRepositoryFactory.mongoActivityRepository() });
  static getActivitiesByMonthService = () =>
    new GetActivitiesByMonthService({ repository: ActivityRepositoryFactory.mongoActivityRepository() });
  static removeActivityService = () =>
    new RemoveActivityService({ repository: ActivityRepositoryFactory.mongoActivityRepository() });
}

import { NewExpenseService } from './NewExpenseService';
import { NewIncomeService } from './NewIncomeService';
import { ActivityRepositoryFactory } from '../Repositories/factory';
import { GetActivitiesService } from './GetActivitiesService';
import { GetActivitiesByMonthService } from './GetActivitiesByMonthService';
import { RemoveActivityService } from './RemoveActivityService';
import { GetActivityService } from './GetActivityService';
import { NewExpenseByTelegramIdService } from './NewExpenseByTelegramIdService';
import { UsersServiceFactory } from '../../users/Services/factory';
import { NewIncomeByTelegramIdService } from './NewIncomeByTelegramIdService';
import { GetActivitiesByTelegramIdService } from './GetActivitiesByTelegramIdService';
import { GetActivitiesByTelegramIdMonthService } from './GetActivitiesByTelegramIdMonthService';

export class ActivityServiceFactory {
  static newExpenseService = () =>
    new NewExpenseService({ repository: ActivityRepositoryFactory.mongoActivityRepository() });
  static newExpenseByTelegramIdService = () =>
    new NewExpenseByTelegramIdService({
      service: ActivityServiceFactory.newExpenseService(),
      userService: UsersServiceFactory.getUserByTelegramIdService(),
    });
  static newIncomeService = () =>
    new NewIncomeService({ repository: ActivityRepositoryFactory.mongoActivityRepository() });
  static newIncomeByTelegramIdService = () =>
    new NewIncomeByTelegramIdService({
      service: ActivityServiceFactory.newIncomeService(),
      userService: UsersServiceFactory.getUserByTelegramIdService(),
    });
  static getActivityService = () =>
    new GetActivityService({ repository: ActivityRepositoryFactory.mongoActivityRepository() });
  static getActivitiesService = () =>
    new GetActivitiesService({ repository: ActivityRepositoryFactory.mongoActivityRepository() });
  static getActivitiesByTelegramIdService = () =>
    new GetActivitiesByTelegramIdService({
      service: ActivityServiceFactory.getActivitiesService(),
      userService: UsersServiceFactory.getUserByTelegramIdService(),
    });
  static getActivitiesByMonthService = () =>
    new GetActivitiesByMonthService({ repository: ActivityRepositoryFactory.mongoActivityRepository() });
  static getActivitiesByTelegramIdMonthService = () =>
    new GetActivitiesByTelegramIdMonthService({
      service: ActivityServiceFactory.getActivitiesByMonthService(),
      userService: UsersServiceFactory.getUserByTelegramIdService(),
    });
  static removeActivityService = () =>
    new RemoveActivityService({ repository: ActivityRepositoryFactory.mongoActivityRepository() });
}

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
import { IFactory } from '../../helpers/types';

export class ActivityServiceFactory {
  static newExpenseService = ({ config }: IFactory) =>
    new NewExpenseService({ repository: ActivityRepositoryFactory.mongoActivityRepository({ config }) });
  static newExpenseByTelegramIdService = ({ config }: IFactory) =>
    new NewExpenseByTelegramIdService({
      service: ActivityServiceFactory.newExpenseService({ config }),
      userService: UsersServiceFactory.getUserByTelegramIdService({ config }),
    });
  static newIncomeService = ({ config }: IFactory) =>
    new NewIncomeService({ repository: ActivityRepositoryFactory.mongoActivityRepository({ config }) });
  static newIncomeByTelegramIdService = ({ config }: IFactory) =>
    new NewIncomeByTelegramIdService({
      service: ActivityServiceFactory.newIncomeService({ config }),
      userService: UsersServiceFactory.getUserByTelegramIdService({ config }),
    });
  static getActivityService = ({ config }: IFactory) =>
    new GetActivityService({ repository: ActivityRepositoryFactory.mongoActivityRepository({ config }) });
  static getActivitiesService = ({ config }: IFactory) =>
    new GetActivitiesService({ repository: ActivityRepositoryFactory.mongoActivityRepository({ config }) });
  static getActivitiesByTelegramIdService = ({ config }: IFactory) =>
    new GetActivitiesByTelegramIdService({
      service: ActivityServiceFactory.getActivitiesService({ config }),
      userService: UsersServiceFactory.getUserByTelegramIdService({ config }),
    });
  static getActivitiesByMonthService = ({ config }: IFactory) =>
    new GetActivitiesByMonthService({ repository: ActivityRepositoryFactory.mongoActivityRepository({ config }) });
  static getActivitiesByTelegramIdMonthService = ({ config }: IFactory) =>
    new GetActivitiesByTelegramIdMonthService({
      service: ActivityServiceFactory.getActivitiesByMonthService({ config }),
      userService: UsersServiceFactory.getUserByTelegramIdService({ config }),
    });
  static removeActivityService = ({ config }: IFactory) =>
    new RemoveActivityService({ repository: ActivityRepositoryFactory.mongoActivityRepository({ config }) });
}

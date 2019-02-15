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
import { IFactory } from '../../helpers/types';

export class ActivityUseCaseFactory {
  static newExpenseUseCase = ({ config }: IFactory) =>
    new NewExpenseUseCase({ service: ActivityServiceFactory.newExpenseService({ config }) });
  static newExpenseByTelegramIdUseCase = ({ config }: IFactory) =>
    new NewExpenseByTelegramIdUseCase({ service: ActivityServiceFactory.newExpenseByTelegramIdService({ config }) });
  static newIncomeUseCase = ({ config }: IFactory) =>
    new NewIncomeUseCase({ service: ActivityServiceFactory.newIncomeService({ config }) });
  static newIncomeByTelegramIdUseCase = ({ config }: IFactory) =>
    new NewIncomeByTelegramIdUseCase({ service: ActivityServiceFactory.newIncomeByTelegramIdService({ config }) });
  static getActivityUseCase = ({ config }: IFactory) =>
    new GetActivityUseCase({ service: ActivityServiceFactory.getActivityService({ config }) });
  static getActivitiesUseCase = ({ config }: IFactory) =>
    new GetActivitiesUseCase({ service: ActivityServiceFactory.getActivitiesService({ config }) });
  static getActivitiesByTelegramIdUseCase = ({ config }: IFactory) =>
    new GetActivitiesByTelegramIdUseCase({
      service: ActivityServiceFactory.getActivitiesByTelegramIdService({ config }),
    });
  static getActivitiesByMonthUseCase = ({ config }: IFactory) =>
    new GetActivitiesByMonthUseCase({ service: ActivityServiceFactory.getActivitiesByMonthService({ config }) });
  static getActivitiesByTelegramIdMonthUseCase = ({ config }: IFactory) =>
    new GetActivitiesByTelegramIdMonthUseCase({
      service: ActivityServiceFactory.getActivitiesByTelegramIdMonthService({ config }),
    });
  static getActivitiesByMonthPaginatedUseCase = ({ config }: IFactory) =>
    new GetActivitiesByMonthPaginatedUseCase({
      service: ActivityServiceFactory.getActivitiesByMonthService({ config }),
    });
  static getActivitiesByTelegramIdMonthPaginatedUseCase = ({ config }: IFactory) =>
    new GetActivitiesByTelegramIdMonthPaginatedUseCase({
      service: ActivityServiceFactory.getActivitiesByTelegramIdMonthService({ config }),
    });
  static removeActivityUseCase = ({ config }: IFactory) =>
    new RemoveActivityUseCase({ service: ActivityServiceFactory.removeActivityService({ config }) });
}

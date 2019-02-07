import { Domain } from 'ts-domain';

import { DatabaseUseCaseFactory } from './database/UseCase/factory';
import { UsersUseCaseFactory } from './users/UseCases/factory';
import { ActivityUseCaseFactory } from './activity/UseCases/factory';

const useCases = {
  start_database: DatabaseUseCaseFactory.startDatabaseUseCase(),
  get_all_users: UsersUseCaseFactory.getAllUsersUseCase(),
  new_user: UsersUseCaseFactory.newUsersUseCase(),
  new_expense: ActivityUseCaseFactory.newExpenseUseCase(),
  new_income: ActivityUseCaseFactory.newIncomeUseCase(),
  get_activity: ActivityUseCaseFactory.getActivityUseCase(),
  get_activities_by_month: ActivityUseCaseFactory.getActivitiesByMonthUseCase(),
  get_activities_by_month_paginated: ActivityUseCaseFactory.getActivitiesByMonthPaginatedUseCase(),
  remove_activity: ActivityUseCaseFactory.removeActivityUseCase(),
};

export const domain = new Domain({ useCases });

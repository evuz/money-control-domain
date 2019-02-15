import { MongoActivityRepository } from './MongoActivityRepository';
import { Singleton } from 'ts-domain';

import { IFactory, SingletonTypes } from '../../helpers/types';
import { ApiActivityRepository } from './ApiActivityRepository';

export class ActivityRepositoryFactory {
  static mongoActivityRepository = ({  }: IFactory) =>
    Singleton({ singleton: MongoActivityRepository, type: SingletonTypes.MongoActivityRepository });
  static apiActivityRepository = ({ config }: IFactory) =>
    Singleton({ singleton: ApiActivityRepository, type: SingletonTypes.ApiActivityRepository }, config.http);
}

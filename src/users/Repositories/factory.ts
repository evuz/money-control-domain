import { MongoUsersRepository } from './MongoUsersRepository';
import { Singleton } from 'ts-domain';

import { IFactory, SingletonTypes } from '../../helpers/types';
import { ApiUsersRepository } from './ApiUsersRepository';

export class UsersRepositoryFactory {
  static mongoUsersRepository = ({  }: IFactory) =>
    Singleton({ singleton: MongoUsersRepository, type: SingletonTypes.MongoUserRepository });
  static apiUsersRepository = ({ config }: IFactory) =>
    Singleton({ singleton: ApiUsersRepository, type: SingletonTypes.ApiUserRepository }, config.http);
}

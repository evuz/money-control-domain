import { MongoUsersRepository } from './MongoUsersRepository';
import { Singleton } from 'ts-domain';

import { IFactory } from '../../helpers/types';

const mongoUsersRepository = new Singleton(MongoUsersRepository);

export class UsersRepositoryFactory {
  static mongoUsersRepository = ({  }: IFactory) => mongoUsersRepository.getInstance();
}

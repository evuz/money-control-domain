import { MongoActivityRepository } from './MongoActivityRepository';
import { Singleton } from 'ts-domain';
import { IFactory } from '../../helpers/types';

const mongoActivityRepository = new Singleton(MongoActivityRepository);

export class ActivityRepositoryFactory {
  static mongoActivityRepository = ({  }: IFactory) => mongoActivityRepository.getInstance();
}

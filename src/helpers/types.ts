export interface IFactory {
  config: any;
}

export enum SingletonTypes {
  ApiUserRepository = 'singleton_api_user_repository',
  MongoUserRepository = 'singleton_mongo_user_repository',
  ApiActivityRepository = 'singleton_api_activity_repository',
  MongoActivityRepository = 'singleton_mongo_activity_repository',
}

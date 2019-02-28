import { getRepository, Repository } from 'typeorm';

import { UsersRepository } from '../UsersRepository';
import { UserEntity } from '../../Entities/User';
import { TelegramUserEntity } from '../../Entities/TelegramUser';
import { User } from './User.entity';
import { TelegramUser } from './TelegramUser.entity';
import { TelegramBotUser } from './TelegramBotUser.entity';
import { TelegramBotUserEntity } from '../../Entities/TelegramBotUser';
import { UserRepositoryErrors } from '../errors';

export class MongoUsersRepository implements UsersRepository {
  private _userRepository: Repository<User>;
  private _telegramUserRepository: Repository<TelegramUser>;
  private _telegramBotUserRepository: Repository<TelegramBotUser>;
  private get userRepository() {
    if (!this._userRepository) {
      this._userRepository = getRepository(User);
    }
    return this._userRepository;
  }
  private get telegramUserRepository() {
    if (!this._telegramUserRepository) {
      this._telegramUserRepository = getRepository(TelegramUser);
    }
    return this._telegramUserRepository;
  }
  private get telegramBotUserRepository() {
    if (!this._telegramBotUserRepository) {
      this._telegramBotUserRepository = getRepository(TelegramBotUser);
    }
    return this._telegramBotUserRepository;
  }

  newTelegramUser({ user }: { user: TelegramUserEntity }): Promise<TelegramUserEntity> {
    return this.telegramUserRepository.save(new TelegramUser(user.flat())).then(u => new TelegramUserEntity(u.flat()));
  }

  async newTelegramBotUser({
    user,
    password,
  }: {
    user: TelegramBotUserEntity;
    password: string;
  }): Promise<TelegramBotUserEntity> {
    const newUser = new User(<User>user.flat());
    await newUser.createHash({ password });
    return this.telegramBotUserRepository.save(newUser).then(u => new TelegramBotUserEntity(u.flat()));
  }

  async newUser({ user, password }: { user: UserEntity; password: string }): Promise<UserEntity> {
    const newUser = new User(<User>user.flat());
    await newUser.createHash({ password });
    return this.userRepository.save(newUser).then(u => new UserEntity(u.flat()));
  }

  getTelegramUserByTelegramId({ telegramId }: { telegramId: string }) {
    return this.telegramUserRepository.findOneOrFail({ where: { telegramId } }).then(user => {
      return new TelegramUserEntity(user.flat());
    });
  }

  getTelegramUser({ id }: { id: string }): Promise<TelegramUserEntity> {
    return this.telegramUserRepository.findOneOrFail(id).then(user => new TelegramUserEntity(user.flat()));
  }

  getUser({ username, email }): Promise<UserEntity> {
    return this.userRepository
      .findOneOrFail({ where: [{ username }, { email }] })
      .then(user => new UserEntity(user.flat()));
  }

  loginUser({ username, email, password }): Promise<UserEntity> {
    const where = username ? { username } : { email };
    return this.userRepository.findOneOrFail({ where }).then(async user => {
      const valid = await user.validPassword(password);
      if (!valid) {
        throw new Error(UserRepositoryErrors.InvalidPassword);
      }

      return new UserEntity(user.flat());
    });
  }

  loginTelegramBotUser({ username, password }): Promise<TelegramBotUserEntity> {
    return this.telegramBotUserRepository.findOneOrFail({ where: { username } }).then(async user => {
      const valid = await user.validPassword(password);
      if (!valid) {
        throw new Error(UserRepositoryErrors.InvalidPassword);
      }
      return new TelegramBotUserEntity(user.flat());
    });
  }
}

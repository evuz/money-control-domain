import { Entity, ObjectIdColumn, ObjectID, Column, Index } from 'typeorm';

import { TelegramUserEntity } from '../../Entities/TelegramUser';
import { UserRol } from '../../Entities/types';

@Entity()
export class TelegramUser extends TelegramUserEntity {
  @ObjectIdColumn()
  private _id: ObjectID;

  @Column()
  @Index({ unique: true })
  telegramId: string;

  @Column()
  rol: UserRol;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  username: string;

  get id() {
    return this._id.toString();
  }
  set id(value: any) {
    this._id = value;
  }
}

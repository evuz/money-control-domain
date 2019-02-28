import { Entity, ObjectIdColumn, ObjectID, Column, Index } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { TelegramBotUserEntity } from '../../Entities/TelegramBotUser';
import { UserRol } from '../../Entities/types';

@Entity()
export class TelegramBotUser extends TelegramBotUserEntity {
  @ObjectIdColumn()
  private _id: ObjectID;

  @Column()
  @Index({ unique: true })
  username: string;

  @Column()
  rol: UserRol;

  @Column()
  password: string;

  get id() {
    return this._id.toString();
  }
  set id(value: any) {
    this._id = value;
  }

  async createHash({ password }: { password: string }) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(password, salt);
    return Promise.resolve();
  }

  async validPassword(password) {
    return await bcrypt.compare(password, this.password);
  }
}

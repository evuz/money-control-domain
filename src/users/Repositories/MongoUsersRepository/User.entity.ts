import { Entity, ObjectIdColumn, ObjectID, Column, Index } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { UserEntity } from '../../Entities/User';
import { UserRol } from '../../Entities/types';

@Entity()
export class User extends UserEntity {
  @ObjectIdColumn()
  private _id: ObjectID;

  @Column()
  @Index({ unique: true })
  username: string;

  @Column()
  @Index({ unique: true })
  email: string;

  @Column()
  rol: UserRol;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  password: string;

  get id() {
    return this._id.toString();
  }
  set id(value: any) {
    this._id = value;
  }

  async createHash({ password }: { password: string }) {
    console.log(password);
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(password, salt);
    console.log(this.password);
    return Promise.resolve();
  }

  async validPassword(password) {
    return await bcrypt.compare(password, this.password);
  }
}

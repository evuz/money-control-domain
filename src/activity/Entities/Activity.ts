import { Entity, property } from 'ts-domain';

export type ActivityWithoutId = Pick<Activity, Exclude<keyof Activity, 'id'>>;
export interface Activity {
  id: string;
  concept: string;
  amount: number;
  user: string;
  date: number;
}

export class ActivityEntity extends Entity<Activity> {
  @property()
  id: string;
  @property()
  concept: string;
  @property()
  amount: number;
  @property()
  user: string;
  @property()
  date: number;

  constructor(props: ActivityWithoutId | Activity) {
    super(props);
  }
}

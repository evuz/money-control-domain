export type ActivityWithoutId = Pick<Activity, Exclude<keyof Activity, 'id'>> & Partial<Pick<Activity, 'id'>>;
export class Activity {
  id: string;
  concept: string;
  amount: number;
  user: string;
  date: number;

  constructor({ concept, amount, date, user, id }: ActivityWithoutId) {
    this.user = user;
    this.concept = concept;
    this.amount = amount;
    this.date = date;
    this.id = id;
  }
}

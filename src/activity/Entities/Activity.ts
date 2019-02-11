export class Activity {
  id?: string;
  concept: string;
  amount: number;
  user: string | number;
  date?: number;

  constructor({ concept, amount, date, user }: Partial<Activity>) {
    this.user = user;
    this.concept = concept;
    this.amount = amount;
    this.date = date;
  }
}

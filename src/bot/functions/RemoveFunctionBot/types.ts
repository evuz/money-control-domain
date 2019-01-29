import { Activity } from '../../../domain/activity/Entities/Activity';

export enum CallbackQuery {
  Key = 'REMOVE_ACTIVITY',
  Remove = 'REMOVE',
  ChangePage = 'CHANGE_PAGE',
  ChangeMonth = 'CHANGE_MONTH',
  Empty = 'EMPTY',
}

export enum CallbackQueryData {
  Option,
  Id,
  Date,
}

export interface IKeyboard {
  activities: Activity[];
  date: number;
  total: number;
  page?: number;
}

import { InlineKeyboardMarkup, EditMessageTextOptions } from 'node-telegram-bot-api';
import { format, startOfMonth, addMonths } from 'date-fns';

import { FunctionBot } from '../models/FunctionBot';
import { ITelegramBotOnText, ICallbackQueryFunction } from '../../types';
import { getDomain } from '../../../domain';
import { CallbackQuery, CallbackQueryData, IKeyboard } from './types';

const PAGE_SIZE = 5;

export class RemoveFunctionBot extends FunctionBot {
  public regex = /\/remove/;

  public execute = ({ msg, botFunctions }: ITelegramBotOnText) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;

    const date = Date.now();
    getDomain()
      .get({ useCase: 'get_activities_by_month_paginated' })
      .execute({ userId, date, take: PAGE_SIZE, page: 0 })
      .then(({ results, total }) => {
        botFunctions.sendMessage({
          chatId,
          text: 'Select activity to remove',
          opts: {
            reply_markup: this.keyboard({ total, date, activities: results }),
          },
        });
      });
  };

  public callbackQuery() {
    return [
      {
        key: CallbackQuery.Key,
        callbackQueryFunction: this.callbackQueryFn,
      },
    ];
  }

  private callbackQueryFn = ({ msg, data, botFunctions }: ICallbackQueryFunction) => {
    const opts: EditMessageTextOptions = {
      message_id: msg.message_id,
      chat_id: msg.chat.id,
    };
    const userId = msg.from.id;

    switch (data[CallbackQueryData.Option]) {
      case CallbackQuery.ChangePage: {
        const date = +data[CallbackQueryData.Date];
        const page = +data[CallbackQueryData.Id];
        return getDomain()
          .get({ useCase: 'get_activities_by_month_paginated' })
          .execute({ userId, date, page, take: PAGE_SIZE })
          .then(({ results, total }) => {
            return botFunctions.editMessageText({
              text: 'Select activity to remove',
              opts: { ...opts, reply_markup: this.keyboard({ date, page, total, activities: results }) },
            });
          });
      }
      case CallbackQuery.ChangeMonth: {
        const date = +data[CallbackQueryData.Id];
        const page = 0;
        return getDomain()
          .get({ useCase: 'get_activities_by_month_paginated' })
          .execute({ userId, date, page, take: PAGE_SIZE })
          .then(({ results, total }) => {
            return botFunctions.editMessageText({
              text: 'Select activity to remove',
              opts: { ...opts, reply_markup: this.keyboard({ date, page, total, activities: results }) },
            });
          });
      }
      case CallbackQuery.Remove:
        return getDomain()
          .get({ useCase: 'get_activity' })
          .execute({ id: data[CallbackQueryData.Id] })
          .then(({ amount, concept, date, id }) => {
            return botFunctions.editMessageText({
              text: `Expense. \nAmount: ${amount}€. \nConcept: ${concept}. \nDate: ${format(
                date,
                'DD MMM YYYY',
              )}\nIs correct?`,
              opts: {
                ...opts,
                reply_markup: {
                  inline_keyboard: [
                    [
                      {
                        text: 'Yes',
                        callback_data: `${CallbackQuery.Key}.${CallbackQuery.Confirm}.${id}`,
                      },
                      {
                        text: 'No',
                        callback_data: `${CallbackQuery.Key}.${CallbackQuery.Refuse}`,
                      },
                    ],
                  ],
                },
              },
            });
          });
      case CallbackQuery.Refuse:
        return botFunctions.editMessageText({
          opts,
          text: 'Operation cancelled',
        });
      case CallbackQuery.Confirm:
        return getDomain()
          .get({ useCase: 'remove_activity' })
          .execute({ id: data[CallbackQueryData.Id] })
          .then(() => {
            return botFunctions.editMessageText({
              opts,
              text: 'Activity removed',
            });
          });
      default:
        return Promise.resolve();
    }
  };

  private keyboard({ activities, total, date: d, page = 0 }: IKeyboard): InlineKeyboardMarkup {
    const buttons = activities.map(({ amount, concept, date, id }) => [
      {
        callback_data: `${CallbackQuery.Key}.${CallbackQuery.Remove}.${id}`,
        text: `${format(date, 'DD/MM/YYYY')} ${concept} => ${amount}€`,
      },
    ]);
    const date = startOfMonth(d).getTime();
    const pageShow = page + 1;
    const totalPages = Math.ceil(total / PAGE_SIZE);
    return {
      inline_keyboard: [
        [
          {
            callback_data: `${CallbackQuery.Key}.${CallbackQuery.ChangeMonth}.${addMonths(date, -1).getTime()}`,
            text: '<',
          },
          {
            callback_data: `${CallbackQuery.Key}.${CallbackQuery.Empty}`,
            text: `${format(date, 'MMM YYYY')}`,
          },
          {
            callback_data: `${CallbackQuery.Key}.${CallbackQuery.ChangeMonth}.${addMonths(date, 1).getTime()}`,
            text: '>',
          },
        ],
        ...buttons,
        [
          {
            callback_data:
              page > 0
                ? `${CallbackQuery.Key}.${CallbackQuery.ChangePage}.${page - 1}.${date}`
                : `${CallbackQuery.Key}.${CallbackQuery.Empty}`,
            text: page > 0 ? '<' : ' ',
          },
          {
            callback_data: `${CallbackQuery.Key}.${CallbackQuery.Empty}`,
            text: `${pageShow}/${totalPages}`,
          },
          {
            callback_data:
              pageShow < totalPages
                ? `${CallbackQuery.Key}.${CallbackQuery.ChangePage}.${page + 1}.${date}`
                : `${CallbackQuery.Key}.${CallbackQuery.Empty}`,
            text: pageShow < totalPages ? '>' : ' ',
          },
        ],
      ],
    };
  }
}

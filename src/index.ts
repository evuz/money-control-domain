import 'reflect-metadata';

import { domain } from './domain';
import { config } from './config';
import { run } from './bot/run';

domain
  .get({ useCase: 'start_database' })
  .execute()
  .then(async () => {
    console.log('App is running...');
    run({ token: config.bot_token });
  })
  .catch(error => console.log(error));

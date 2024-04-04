import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { INFO_TOKEN } from 'commonp';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), {
    provide: INFO_TOKEN,
    useValue: {
      name: 'Angular',
      country: 'USA'
    }
  }]
};

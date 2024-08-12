import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';
import { SharedState } from './components/shared/state/shared.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      NgxsModule.forRoot([SharedState]),
      HttpClientModule
    ),
  ]
};

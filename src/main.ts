import { APP_BASE_HREF } from '@angular/common';
import { APP_ID, importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { provideStore } from '@ngrx/store';
import { localStorageSyncReducer } from './app/state/local-storage-sync';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { environment } from './environments/environment.prod';
import { HttpClientModule } from '@angular/common/http';

function bootstrap() {
  bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(appRoutes),
      importProvidersFrom(BrowserModule, HttpClientModule),
      { provide: APP_ID, useValue: 'serverApp' },
      { provide: APP_BASE_HREF, useValue: '/lentune-onboarding-wizard' },
      provideStore({}, { metaReducers: [localStorageSyncReducer] }),
      provideEffects([]),
      provideStoreDevtools({
        maxAge: 25,
        logOnly: environment.production,
        features: {
          pause: false,
          lock: true,
          persist: true,
        },
      }),
    ],
  }).catch((err) => console.error(err));
}

if (document.readyState !== 'loading') {
  bootstrap();
} else {
  document.addEventListener('DOMContentLoaded', bootstrap);
}

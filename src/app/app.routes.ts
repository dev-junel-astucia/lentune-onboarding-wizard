import { Routes } from '@angular/router';

export enum RoutePath {
  Dashboard = 'dashboard',
  // Fallouts
  TimeOut = 'time-out',
  GenericIssue = 'generic-issue',
  TechnicalIssue = 'technical-issue',
}

export const appRoutes: Routes = [
  { path: '', redirectTo: RoutePath.Dashboard, pathMatch: 'full' },
  { path: '**', redirectTo: RoutePath.Dashboard },
];

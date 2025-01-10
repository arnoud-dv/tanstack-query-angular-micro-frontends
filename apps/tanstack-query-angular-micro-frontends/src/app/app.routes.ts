import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'shared-query-client-1',
    loadChildren: () =>
      import('@tanstack-query-angular-micro-frontends/shared-query-client-1'),
  },
  {
    path: 'shared-query-client-2',
    loadChildren: () =>
      import('@tanstack-query-angular-micro-frontends/shared-query-client-2'),
  },
  {
    path: 'isolated-query-client-1',
    loadChildren: () =>
      import('@tanstack-query-angular-micro-frontends/isolated-query-client-1'),
  },
  {
    path: 'isolated-query-client-2',
    loadChildren: () =>
      import('@tanstack-query-angular-micro-frontends/isolated-query-client-2'),
  },
];

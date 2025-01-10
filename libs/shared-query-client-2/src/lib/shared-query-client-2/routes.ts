import { Routes } from '@angular/router';
import { SharedQueryClient2Component } from './shared-query-client-2.component';
import { provideSharedQueryClient } from '@tanstack-query-angular-micro-frontends/shared-query-client-provider';

export const sharedQueryClient2Routes: Routes = [
  {
    path: '',
    component: SharedQueryClient2Component,
    providers: [provideSharedQueryClient()],
  },
];

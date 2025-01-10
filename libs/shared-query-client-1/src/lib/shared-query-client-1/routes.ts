import { Routes } from '@angular/router';
import { SharedQueryClient1Component } from './shared-query-client-1.component';
import { provideSharedQueryClient } from '@tanstack-query-angular-micro-frontends/shared-query-client-provider';

export const sharedQueryClient1Routes: Routes = [
  {
    path: '',
    component: SharedQueryClient1Component,
    providers: [provideSharedQueryClient()],
  },
];

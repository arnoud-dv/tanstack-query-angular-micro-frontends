import {
  provideQueryClient,
  QueryClient,
} from '@tanstack/angular-query-experimental';
import { IsolatedQueryClient1Component } from './isolated-query-client-1.component';
import { Routes } from '@angular/router';

export const isolatedQueryClient1Routes: Routes = [
  {
    path: '',
    component: IsolatedQueryClient1Component,
    providers: [provideQueryClient(new QueryClient())],
  },
];

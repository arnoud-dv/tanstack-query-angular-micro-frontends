import {
  provideQueryClient,
  QueryClient,
} from '@tanstack/angular-query-experimental';
import { IsolatedQueryClient2Component } from './isolated-query-client-2.component';
import { Routes } from '@angular/router';

export const isolatedQueryClient2Routes: Routes = [
  {
    path: '',
    component: IsolatedQueryClient2Component,
    providers: [provideQueryClient(new QueryClient())],
  },
];

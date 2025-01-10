import {
  DestroyRef,
  EnvironmentProviders,
  inject,
  InjectionToken,
  makeEnvironmentProviders,
} from '@angular/core';
import { QueryClient } from '@tanstack/angular-query-experimental';

const SharedQueryClient = new InjectionToken<QueryClient>(
  'Shared QueryClient',
  {
    providedIn: 'root',
    factory: () => {
      const client = new QueryClient();
      inject(DestroyRef).onDestroy(client.unmount);
      // Enabling refetching on window focus requires calling mount on queryClient
      // See: https://tanstack.com/query/latest/docs/framework/angular/guides/window-focus-refetching
      client.mount();
      return client;
    },
  }
);

// Provider functions similar to this could in principle also be used to provide different shared query clients.
// Note that injector hierarchy will then determine which QueryClient is injected
export function provideSharedQueryClient(): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: QueryClient,
      useFactory: () => {
        return inject(SharedQueryClient);
      },
      deps: [SharedQueryClient],
    },
  ]);
}

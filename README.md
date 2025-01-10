# TanStack Query + Angular Micro Frontends

This example demonstrates how to integrate [TanStack Query](https://tanstack.com/query/latest/docs/framework/angular/overview) in an Angular Nx application that uses a micro frontend architecture consisting of a shell and feature libraries.

## Main Bundle Optimization
The main application does not include TanStack Query, so it adds nothing to the main bundle.
## Isolated Query Clients
Lazy-loaded feature libraries can each include TanStack Query and provide their own `QueryClient` instance. You can see this approach in `libs/isolated-query-client-1` and `libs/isolated-query-client-2`. This approach may be beneficial when many teams are working on different features and you want to ensure these teams can work independently. It also ensures that the cache is completely separated between features.
## Shared QueryClient
If you need to share a cache or `QueryClient` configuration across multiple features, you can use a single `QueryClient` for all of them. This is shown in `libs/shared-query-client-1` and `libs/shared-query-client-2`. If you have good query key management or even generate query keys there may be less of a need to separate caches.

## Devtools
The more typical approach of adding `provideTanStackQuery` to the main app config would make it very easy to also add devtools using `withDevtools`.
This repository demonstrates adding devtools at the feature level using `injectDevtoolsPanel`. When sharing a `QueryClient`, you can also add devtools to the main app by using `injectDevtoolsPanel` in a custom lazy-loaded devtools component and passing in the shared `QueryClient`.

> [!NOTE]
TanStack Query is quite lightweight. In fact, the reduced boilerplate for server state management can significantly decrease your overall bundle size. For many applications, simply adding `provideTanStackQuery` to the main app config is preferable. If you don’t need TanStack Query in the main app and want to keep the main bundle as small as possible, you can use the approaches demonstrated in this repository.

> [!NOTE]
Using different `QueryClient` instances in each feature ensures complete separation but may be less efficient due to reduced cache effectiveness. If you need to share the cache or `QueryClient` configuration, use the shared `QueryClient` approach.

import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
    <ul>
      <li>
        <a routerLink="/home">Home - no TanStack Query at all</a>
      </li>
    </ul>

    <h2>QueryClient initialized when needed and shared between features</h2>
    <ul>
      <li>
        <a routerLink="/shared-query-client-1">Shared Query Client 1</a>
      </li>
      <li>
        <a routerLink="/shared-query-client-2">Shared Query Client 2</a>
      </li>
    </ul>

    <h2>QueryClient initialized when needed and isolated per feature</h2>
    <ul>
      <li>
        <a routerLink="/isolated-query-client-1">Isolated Query Client 1</a>
      </li>
      <li>
        <a routerLink="/isolated-query-client-2">Isolated Query Client 2</a>
      </li>
    </ul>
    <router-outlet />
  `,
})
export class AppComponent {}

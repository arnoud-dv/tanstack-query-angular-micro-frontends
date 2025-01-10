import { Component, ElementRef, viewChild } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { injectDevtoolsPanel } from '@tanstack/angular-query-devtools-experimental';

@Component({
  selector: 'lib-isolated-query-client-1',
  template: ` <p>isolated-query-client-1 works!</p>
    <div #div style="height: 500px"></div>`,
})
export class IsolatedQueryClient1Component {
  devToolsPanel = viewChild<ElementRef>('div');
  devtools = injectDevtoolsPanel(() => ({
    hostElement: this.devToolsPanel(),
  }));

  query = injectQuery(() => ({
    queryKey: ['isolated-query-client-1'],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 1000));
      return 'isolated-query-client-1';
    },
  }));
}

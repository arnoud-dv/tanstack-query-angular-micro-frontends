import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  viewChild,
} from '@angular/core';
import { injectDevtoolsPanel } from '@tanstack/angular-query-devtools-experimental';
import { injectQuery } from '@tanstack/angular-query-experimental';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'lib-shared-query-client-1',
  template: `
    <p>shared-query-client-1 works!</p>
    <div #div style="height: 500px"></div>
  `,
})
export class SharedQueryClient1Component {
  devToolsPanel = viewChild<ElementRef>('div');
  devtools = injectDevtoolsPanel(() => ({
    hostElement: this.devToolsPanel(),
  }));

  query = injectQuery(() => ({
    queryKey: ['shared-query-client-1'],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 1000));
      return 'shared-query-client-1';
    },
  }));
}

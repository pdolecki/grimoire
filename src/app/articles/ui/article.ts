import {
  ChangeDetectionStrategy,
  Component,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { SectionHeader } from '../../shared/ui/section-header';
import { Badge } from '../../shared/ui/badge';

@Component({
  selector: 'app-article',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeader, Badge],
  encapsulation: ViewEncapsulation.None,
  template: `
    <section class="article">
      <div class="article__tags">
        <app-badge [label]="tag()"></app-badge>
      </div>

      <img [src]="cover()" class="article__cover" />

      <header>
        <app-section-header
          [title]="title()"
          [description]="description()"
        ></app-section-header>
      </header>

      <div class="article__content">
        <ng-content />
      </div>
    </section>
  `,
  styles: [
    `
      .article {
        &__tags {
          display: flex;
          gap: var(--sz-10);
          padding: var(--sz-16);
        }
        &__cover {
          width: 100%;
        }
        &__content {
          height: 100%;
          color: var(--cl-light-06);
          background: var(--cl-dark-02);
          border: 1px solid var(--cl-light-02);
          padding: var(--sz-10) var(--sz-30);
          backdrop-filter: blur(10px);
          box-shadow: 0 20px 50px var(--cl-primary-02);
          h2 {
            color: var(--cl-light);
          }
        }
      }
    `,
  ],
})
export class Article {
  readonly cover = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly tag = input.required<string>();
}

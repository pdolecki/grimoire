import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ARTICLES_PREVIEWS } from './consts/articles-previews';
import { SectionHeader } from '../shared/ui/section-header';
import { ArticlePreviewData } from './interfaces/article-preview-data';
import { ArticlePreview } from './ui/article-preview';

@Component({
  selector: 'app-articles',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeader, ArticlePreview],
  template: `
    <section class="articles">
      <app-section-header
        title="Articles"
        description="Browse the latest articles to explore best practices, tips, and deep dives on frontend development."
      ></app-section-header>

      <ul class="grid">
        @for (articlePreview of articlesPreviews(); track articlePreview.slug) {
        <app-article-preview
          [articlePreview]="articlePreview"
        ></app-article-preview>
        }
      </ul>
    </section>
  `,
  styles: [
    `
      .articles {
        max-width: 960px;
        margin: 0 auto;
        padding: 24px;
        &__grid {
          .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: var(--sz-50);
            align-items: stretch;
            & > app-card {
              display: block;
              height: 100%;
            }
          }
        }
      }
      .grid {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        gap: 16px;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      }
    `,
  ],
})
export class Articles {
  readonly articlesPreviews = signal<ArticlePreviewData[]>(ARTICLES_PREVIEWS);
}

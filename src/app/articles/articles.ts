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

      <div class="articles__grid">
        @for (articlePreview of articlesPreviews(); track articlePreview.slug) {
        <app-article-preview
          [articlePreview]="articlePreview"
        ></app-article-preview>
        }
      </div>
    </section>
  `,
  styles: [
    `
      .articles {
        &__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--sz-20);
          align-items: stretch;
          & > app-card {
            display: block;
            height: 100%;
          }
        }
      }
      @media (max-width: 768px) {
        .articles {
          &__grid {
            grid-template-columns: 1fr;
            gap: var(--sz-30);
          }
        }
      }
    `,
  ],
})
export class Articles {
  readonly articlesPreviews = signal<ArticlePreviewData[]>(ARTICLES_PREVIEWS);
}

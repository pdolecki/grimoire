import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArticlePreviewData } from '../interfaces/article-preview-data';
import { Badge } from '../../shared/ui/badge';

@Component({
  selector: 'app-article-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Badge],
  template: `
    <article
      class="article-preview"
      [routerLink]="['/articles', articlePreview().slug]"
    >
      @if (articlePreview().cover) {
      <img class="article-preview__image" [src]="articlePreview().cover!" />
      }

      <h2 class="article-preview__title">{{ articlePreview().title }}</h2>

      <p class="article-preview__description">
        {{ articlePreview().description }}
      </p>

      <div class="article-preview__tags">
        @if (articlePreview().tags) { @for (tag of articlePreview().tags!; track
        $index) {
        <app-badge [label]="tag"></app-badge>
        } }
      </div>
    </article>
  `,
  styles: [
    `
      .article-preview {
        height: 100%;
        background: var(--cl-dark-02);
        border: 1px solid var(--cl-light-02);
        padding: var(--sz-40);
        backdrop-filter: blur(10px);
        box-shadow: 0 20px 50px var(--cl-primary-02);
        display: flex;
        flex-direction: column;
        gap: var(--sz-14);
        &:hover {
          cursor: pointer;
        }
        &__image {
          width: 100%;
          filter: blur(1px) brightness(0.7) contrast(1.05) saturate(0.9);
        }
        &__title {
          text-transform: uppercase;
          font-size: var(--sz-22);
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--cl-primary);
          margin: var(--sz-20) 0 0 0;
        }
        &__description {
          margin-top: var(--sz-10);
          color: var(--cl-light-06);
          line-height: var(--sz-26);
        }
        &__tags {
          display: flex;
          gap: var(--sz-10);
        }
      }
    `,
  ],
})
export class ArticlePreview {
  readonly articlePreview = input.required<ArticlePreviewData>();
}

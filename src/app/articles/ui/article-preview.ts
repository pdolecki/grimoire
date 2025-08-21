import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArticlePreviewData } from '../interfaces/article-preview-data';

@Component({
  selector: 'app-article-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NgOptimizedImage],
  template: `
    <li class="card">
      <a [routerLink]="['/articles', articlePreview().slug]">
        @if (articlePreview().cover) {
        <img
          [ngSrc]="articlePreview().cover!"
          width="500"
          height="420"
          alt=""
        />
        }
        <h2>{{ articlePreview().title }}</h2>
        <p class="muted">{{ articlePreview().description }}</p>
        <div class="sub">
          <time [attr.datetime]="articlePreview().date">{{
            articlePreview().date
          }}</time>
          @if (articlePreview().tags?.length) {
          <span class="dot">•</span>
          <ul class="tags">
            @for (t of articlePreview().tags!; track $index) {
            <li>{{ t }}</li>
            }
          </ul>
          }
        </div>
      </a>
    </li>
  `,
  styles: [
    `
      .card {
        border: 1px solid #243041;
        border-radius: 16px;
        overflow: hidden;
        background: #0f1623;
      }
      .card a {
        display: block;
        padding: 16px;
        color: inherit;
        text-decoration: none;
      }
      .muted {
        color: #9aa5b1;
      }
      .sub {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        color: #9aa5b1;
      }
      .tags {
        display: flex;
        gap: 0.4rem;
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .tags li {
        padding: 2px 8px;
        border-radius: 999px;
        background: rgba(99, 102, 241, 0.12);
        border: 1px solid rgba(99, 102, 241, 0.35);
        color: #c7d2fe;
        font-size: 12px;
      }
      .dot {
        opacity: 0.6;
      }
    `,
  ],
})
export class ArticlePreview {
  readonly articlePreview = input.required<ArticlePreviewData>();
}

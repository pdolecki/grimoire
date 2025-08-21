import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Prose } from './prose';

@Component({
  selector: 'app-article',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Prose, NgOptimizedImage],
  template: `
    <app-prose>
      @if (cover()) {
      <img [ngSrc]="cover()!" width="1280" height="640" alt="" class="cover" />
      }
      <header class="meta">
        <h1 class="title">{{ title() }}</h1>
        <div class="sub">
          <time [attr.datetime]="date()">{{ date() }}</time>
          @if (tags()?.length) {
          <span class="dot">•</span>
          <ul class="tags">
            @for (t of tags()!; track $index) {
            <li>{{ t }}</li>
            }
          </ul>
          }
        </div>
        @if (description()) {
        <p class="desc">{{ description() }}</p>
        }
      </header>

      <ng-content />
    </app-prose>
  `,
  styles: [
    `
      .cover {
        width: 100%;
        height: auto;
        border-radius: 16px;
        margin-bottom: 16px;
        border: 1px solid #243041;
      }
      .meta .title {
        margin: 0.2rem 0 0;
      }
      .meta .sub {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        color: #9aa5b1;
      }
      .meta .tags {
        display: flex;
        gap: 0.4rem;
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .meta .tags li {
        padding: 2px 8px;
        border-radius: 999px;
        background: rgba(99, 102, 241, 0.12);
        border: 1px solid rgba(99, 102, 241, 0.35);
        color: #c7d2fe;
        font-size: 12px;
      }
      .meta .desc {
        color: #cbd5e1;
        margin: 0.6rem 0 1.2rem;
      }
      .dot {
        opacity: 0.6;
      }
    `,
  ],
})
export class Article {
  readonly title = input.required<string>();
  readonly date = input.required<string>(); // ISO or yyyy-mm-dd
  readonly description = input<string>('');
  readonly tags = input<string[] | null>(null);
  readonly cover = input<string | null>(null);
}

// shared/ui/prose/prose.ts
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-prose',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<section class="prose"><ng-content /></section>`,
  styles: [
    `
      .prose {
        max-width: 760px;
        margin: 0 auto;
        padding: 24px;
        color: #e5e7eb;
      }
      .prose :is(h1, h2, h3) {
        line-height: 1.2;
        margin: 1.2em 0 0.6em;
        font-weight: 800;
      }
      .prose h1 {
        font-size: clamp(28px, 4vw, 38px);
      }
      .prose h2 {
        font-size: clamp(22px, 3vw, 28px);
      }
      .prose h3 {
        font-size: clamp(18px, 2.4vw, 22px);
      }
      .prose p,
      .prose li {
        line-height: 1.75;
      }
      .prose ul,
      .prose ol {
        padding-left: 1.2rem;
      }
      .prose img {
        max-width: 100%;
        height: auto;
        border-radius: 12px;
      }
      .prose blockquote {
        margin: 1em 0;
        padding: 0.5em 1em;
        border-left: 3px solid #6366f1;
        background: rgba(99, 102, 241, 0.08);
        border-radius: 8px;
      }
      .prose a {
        color: #93c5fd;
        text-decoration: underline;
      }
      .prose hr {
        border: 0;
        height: 1px;
        background: #243041;
        margin: 2rem 0;
      }
      /* code defaults (works even without CodeBlock component) */
      .prose pre {
        overflow: auto;
        padding: 12px;
        border-radius: 12px;
        background: #0f1623;
        border: 1px solid #243041;
      }
      .prose code {
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        font-size: 0.95rem;
      }
    `,
  ],
})
export class Prose {}

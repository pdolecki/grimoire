import { ArticlePreviewData } from '../interfaces/article-preview-data';

export const ARTICLES_PREVIEWS: ArticlePreviewData[] = [
  {
    slug: 'angular-20-signals',
    title: 'Angular 20: Pragmatic Signals Everywhere',
    description:
      'A field guide to adopting signals in real code without rewriting the world.',
    cover: '/articles/angular-20-signals.png',
    tags: ['Angular'],
  },
  {
    slug: 'zoneless-change-detection',
    title: 'Zoneless Change Detection: When & How',
    description:
      'Run Angular without zone.js, safely. Pitfalls, patterns, and checklists.',
    cover: '/articles/zoneless-change-detection.png',
    tags: ['Angular'],
  },
  {
    slug: 'designing-shared-ui',
    title: 'Designing a Shared UI Library that Ages Well',
    description: 'Naming, boundaries, and tiny components that scale.',
    cover: '/articles/designing-shared-ui.png',
    tags: ['Angular', 'General'],
  },
] as const;

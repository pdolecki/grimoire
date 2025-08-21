import { ArticlePreviewData } from '../interfaces/article-preview-data';

export const ARTICLES_PREVIEWS: ArticlePreviewData[] = [
  {
    slug: 'angular-20-signals',
    title: 'Angular 20: Pragmatic Signals Everywhere',
    date: '2025-08-10',
    description:
      'A field guide to adopting signals in real code without rewriting the world.',
    cover: '/articles/1.png',
    tags: ['Angular', 'Signals'],
  },
  {
    slug: 'zoneless-change-detection',
    title: 'Zoneless Change Detection: When & How',
    date: '2025-08-15',
    description:
      'Run Angular without zone.js, safely. Pitfalls, patterns, and checklists.',
    cover: '/articles/1.png',
    tags: ['Angular', 'Performance'],
  },
  {
    slug: 'designing-shared-ui',
    title: 'Designing a Shared UI Library that Ages Well',
    date: '2025-08-18',
    description: 'Naming, boundaries, and tiny components that scale.',
    cover: '/articles/1.png',
    tags: ['Architecture', 'Design'],
  },
] as const;

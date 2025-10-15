import { ArticlePreviewData } from '../interfaces/article-preview-data';

export const ARTICLES_PREVIEWS: ArticlePreviewData[] = [
  {
    slug: 'angular-20-signals',
    title: 'Angular 20: Pragmatic Signals Everywhere',
    description:
      'A field guide to adopting signals in real code without rewriting the world.',
    cover: '/articles/1.png',
    tags: ['Angular'],
  },
  {
    slug: 'zoneless-change-detection',
    title: 'Zoneless Change Detection: When & How',
    description:
      'Run Angular without zone.js, safely. Pitfalls, patterns, and checklists.',
    cover: '/articles/2.png',
    tags: ['Angular'],
  },
  {
    slug: 'designing-shared-ui',
    title: 'Designing a Shared UI Library that Ages Well',
    description: 'Naming, boundaries, and tiny components that scale.',
    cover: '/articles/3.png',
    tags: ['Angular', 'General'],
  },
  {
    slug: 'angular-habits-for-senior-developers',
    title: 'Angular Habits for Senior Developers',
    description: 'What should we consider if we to advance as a developers.',
    cover: '/articles/1.png',
    tags: ['Angular', 'General'],
  },
] as const;

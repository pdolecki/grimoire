import { CardModel } from '../interfaces/card-model';

export const CATEGORIES: CardModel[] = [
  {
    id: 'javascript',
    icon: '📜',
    title: 'JavaScript',
    caption:
      'Core concepts, modern features, async workflows, and performance tips for building efficient JavaScript code.',
  },
  {
    id: 'angular',
    icon: '🅰️',
    title: 'Angular',
    caption:
      'Architecture patterns, performance tuning, and scalable best practices for modern Angular applications.',
  },
  {
    id: 'typescript',
    icon: '🔷',
    title: 'TypeScript',
    caption:
      'Typing strategies, generics, interfaces, and advanced TypeScript features for safer and more maintainable code.',
  },
  {
    id: 'html-css',
    icon: '🎨',
    title: 'HTML/CSS',
    caption:
      'Semantic HTML, responsive layouts, and modern CSS techniques for clean, accessible, and maintainable user interfaces.',
  },
  {
    id: 'general',
    icon: '🌐',
    title: 'General',
    caption:
      'Broad development knowledge, design principles, and essential programming skills across various technologies.',
  },
] as const;

import { CardModel } from '../interfaces/card-model';

export const CATEGORIES: CardModel[] = [
  {
    icon: '📜',
    category: 'JavaScript',
    caption:
      'Core concepts, modern features, async workflows, and performance tips for building efficient JavaScript code.',
  },
  {
    icon: '🅰️',
    category: 'Angular',
    caption:
      'Architecture patterns, performance tuning, and scalable best practices for modern Angular applications.',
  },
  {
    icon: '🔷',
    category: 'TypeScript',
    caption:
      'Typing strategies, generics, interfaces, and advanced TypeScript features for safer and more maintainable code.',
  },
  {
    icon: '🎨',
    category: 'HTML/CSS',
    caption:
      'Semantic HTML, responsive layouts, and modern CSS techniques for clean, accessible, and maintainable user interfaces.',
  },
  {
    icon: '🌐',
    category: 'General',
    caption:
      'Broad development knowledge, design principles, and essential programming skills across various technologies.',
  },
] as const;

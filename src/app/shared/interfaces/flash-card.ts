export interface FlashCard {
  question: string;
  answer: string;
  category: FlashCardCategory;
}

export type FlashCardCategory =
  | 'Angular'
  | 'JavaScript'
  | 'TypeScript'
  | 'DesignPatterns'
  | 'Testing'
  | 'DataStructures'
  | 'Algorithms'
  | 'HtmlCss'
  | 'Programming';

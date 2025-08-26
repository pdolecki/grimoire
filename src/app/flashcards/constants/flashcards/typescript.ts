import { FlashcardData } from '../../models/flashcard-data';

export const FLASHCARDS_TYPESCRIPT: FlashcardData[] = [
  {
    question: 'What are TypeScript generics?',
    answer: `
    Generics in TypeScript let us write type-safe, reusable code that’s still flexible. We use a placeholder like <T>, and TypeScript infers or enforces the type when the function, class, or interface is used.

    For example, in an app where we display multiple types of feature lists — each stored in a   different Firestore collection — instead of writing separate getCollection methods for each feature, we can create a generic function.
    getCollection<T>(name: string): Observable<T[]> {
      return collectionData(collection(this.firestore, name)) as Observable<T[]>;
    }
    `,
    category: 'TypeScript',
  },
];

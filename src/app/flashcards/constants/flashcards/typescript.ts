import { FlashcardData } from '../../models/flashcard-data';

export const FLASHCARDS_TYPESCRIPT: FlashcardData[] = [
  {
    question: 'What are Generics in TypeScript?',
    answer: `
    Generics in TypeScript let us write type-safe, reusable code that is flexible.
    We use a placeholder like <T> and TypeScript infers or eforces the type when the function, class or interface is used.

    Example:
    We have an app with multiple types of feature lists, each corresponding to a different Firestore collection. Instead of writing seperate getCollection methods for each feature and repeting the same code we can create a generic function:

    getCollection<T>(collectionName: string): Observable<T[]> {
      return collectionData(collection(this.firestore, collectionName)) as Observable<T>;
    }
    `,
    category: 'TypeScript',
  },
  {
    question:
      'What are user-defined type guards in TypeScript and how is "is" used?',
    answer: `
    User-defined type guards
    Functions that help TypeScript narrow a type at runtime.

    The "is" operator in the return type tells the compiler:
    - if the function returns true, the argument is of the specified type
    - it allows safe narrowing inside conditionals
    - Example:
    function isCat(pet: Animal): pet is Cat {
      return (pet as Cat).meow !== undefined;
    }

    if (isCat(animal)) {
      // here "animal" is inferred as Cat
      animal.meow();
    }
    `,
    category: 'TypeScript',
  },
  // {
  //   question: '',
  //   answer: ``,
  //   category: 'TypeScript'
  // }
];

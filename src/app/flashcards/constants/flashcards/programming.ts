import { FlashcardData } from '../../models/flashcard-data';

export const FLASHCARDS_PROGRAMMING: FlashcardData[] = [
  {
    question: 'What is the difference between Composition and Inheritance?',
    answer: `
    Composition 
    One class contains instances of other classes or functions to use their behavior. (HAS-A RELATIONSHIP)
    Example:
    Car has Engine, UIComponent, uses tooltipService

    Inheritance
    One class extends another, reusing and overriding its behavior. (IS-A RELATIONSHIP)
    Example:
    AdminUser extends User
    `,
    category: 'Programming',
  },
  {
    question: 'What is SOLID? What does it stand for?',
    answer: `
    SOLID is a set of object-oriented design principles. It helps make code more maintainable, flexible and scalable.

    Single Responsibility
    Each piece of our code (class, module, function) should have only one reason to change. It should have only one responsibility.

    Open/Closed 
    Software entities should be open for extension, but closed for modification. We should be able to add new behavior without altering the existing one.

    Liskov Substitution 
    Subtypes must be substitutable for their base types without breaking the correctness of the program. Derived classes should honor the contracts of their parents.

    Interface Segregation
    Clients should not be forced to depend on methods they don't use. It's better to have many small and specific interfaces than one large, general-purpose one.

    Dependency Inversion
    High-level modules should not depend on low-level modules. Both should depend on abstractions and abstractions should not depend on details (details should depend on abstractions).
    `,
    category: 'Programming',
  },
  {
    question:
      'What is the difference between a monolith and a microservice architecture?',
    answer: `
    Monolith
    Is a single, unified application where all features are built and deployed together.

    Microservice
    It is an application that is broken into independent pieces and services, each contains its own domain logic. They communicate via APIs.

    Example
    Usually if not sure, we should start with a well-structured monolith and extract microservices only when scaling, ownership or performance demand it.
    `,
    category: 'Programming',
  },
  {
    question: 'What is Domain Driven Design?',
    answer: `
    Domain Driven Desing (DDD)
    It is a software design approach that is focused on modeling software based on real business domains. It is using ubiquitus language and organizes code around the business logic, not technical layers.

    It helps to keep the code aligned with the real business, design modular and maintainable system. It avoids models with just data and without behavior and makes refactoring and scaling easier as domain grows.
    `,
    category: 'Programming',
  },
  {
    question: 'Data Structures - what they are and what for?',
    answer: `
    Data Structures
    They are a way of organizing and storing data to enable efficient access and modification. Choosing the right one is important for performance and clarity of logic.

    Example:
    1. Array - ordered collection of elements accessed by index, great for ordered lists.
    2. Linked List - each item (node) points to the next. Useful for frequently adding and removing from the beggining.
    3. Stack LIFO - Used for undo history, recursion, etc.
    4. Queue FIFO - Used for async tasks, schedulers, etc.
    5. Hash Table/Map - key-value paris with fast access, perfect for caching or lookups.
    6. Tree - hierarchical structure (e.g. DOM), used in sorting, searching (BST) and respresenting structure.
    7. Graph - Set of noeds and edges, used for modeling complex relationsips (e.g. routing, social networks).
    `,
    category: 'Programming',
  },
  {
    question: 'What are WebSockets and how do they differ from HTTP?',
    answer: `
    WebSocket
    It is a communication protocol that creates a persistent, full-duplex connection between a client and a server. It is designed for real-time applications like chat, live dashboards, multiplayer games etc.

    Key differences from HTTP:
    1. Connection - persistent (vs request/response)
    2. Direction - bi-directional (vs client -> server only)
    3. Overhead - lightweight after initial handshake (vs repeated headers)
    4. Latency - very low (vs higher)
    6. Use cases - real time, event-driven apps (vs static content, REST APIs)
    `,

    category: 'Programming',
  },
  {
    question: 'What are Web Components and how do they work?',
    answer: `
    Web Components
    They are a set of standardized browser APIs that let developers create reausable and encapsulated custom elements (like your own HTML tags). They work across all modern browsers without frameworks.
    
    Core technologies:
    1. Custom ELements - define new HTML elements
    2. Shadow DOM - encapsulated markup & styles
    3. HTML Templates - define markup snippets that arent rendered until cloned and attached
    4. ES Modules - enable modularity, reusability and lazy loading
  
    Why use them:
    - Framework agnostic
    - Fully encapsulated 
    - Portable and reusable
    - Native
    `,
    category: 'Programming',
  },
];

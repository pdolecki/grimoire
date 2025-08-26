import { FlashcardData } from '../../models/flashcard-data';

export const FLASHCARDS_PROGRAMMING: FlashcardData[] = [
  {
    question: 'What is the difference between composition and inheritance?',
    answer: `
    Composition - one class contains instances of other classes or functions to use their behavior.
    Has-a relationship - Car has an Engine, UIComponent, uses TooltipService

    Inheritance - one class extends another, reusing and overriding its behavior.
    Is-a relationship - AdminUser extends User
    `,
    category: 'Programming',
  },
  {
    question: 'What is SOLID and how it applies to Angular development?',
    answer: `
    S - Single Responsibility Principle (SRP)
    Each component, service, or class should have one well-defined responsibility. In Angular, we often split responsibilities by using services for business logic and keeping components focused on rendering and interaction.

    O - Open/Closed Principle (OCP)
    Code should be open for extenstion but closed for modification. In Angular, this often means desigin services or components so they can be extended or customized via injection, configuration, or strategy pattern, rather than editing their internals (e.g. Instead of changing LoggerService, you inject a different one via a factory or token).

    L - Liskov Substition Principle (LSP)
    Subclasses should be substitutable for their base classes without breaking the app. In Angular, that could mean creating a BaseButtonComponent and extending it - but the child components must keep the same API and behavior contract (e.g. inputs, outputs, lifecycle). 

    I - Interface Segregation Principe (ISP)
    Prefer many small, focused interfaces over one large, bloated one. In Angular this might apply to Form models, DTOs, or state slices - where splitting interfaces keeps types clean and easier to extend or reuse.

    D - Dependency Inversion Principle (DIP)
    High-level categorys shouldn't depend on low-level categorys - both should depend on abstractions. In Angular, we avoid directly using 3rd-party services inside components. Instead, we create facade services that depend on interfaces, and inject implementations. This keeps the app testable and swappable.
    `,
    category: 'Programming',
  },
  {
    question:
      'Difference between a monolith and a microservice architecture? When to choose which?',
    answer: `
    A monolith is a single, unified application where all features are built and deployed together.
    A microservice architecture breaks the app into independent services, each owning its own domain logic. These services communicate via APIs.

    Rule of thumb would be to start with a well-structured monolith and extract microservices only when scaling, ownership, or performance demand it.
    `,
    category: 'Programming',
  }, {
    question: 'What is Domain Driven Design?',
    answer: `
    DDD is a software design approach focused on modeling software based on real business domains, using ubiquitus language and organizing code around the business logic, not technical layers.

    It helps to keep the code aligned with the real business, design modular and maintainable system, avoids models with just data and without behavior and makes refactoring and scaling easier as your domain grows.
    `,
    category: 'Programming',
  }, {
    question: 'Data Structures - what they are and what for?',
    answer: `
    Data structures are ways of organizing and storing data to enable efficient access and modification. Choosing the right data structure is important for performance and clarity of logic.
    Some examples:
    1. Array - ordered collection of elements accessed by index. Great for ordered lists.
    2. Linked List - each item (node) points to the next. Usefult when you frequently add/remove from the beginning.
    3. Stack LIFO - Used for undo history, recursion, etc.
    4. Queue FIFO - Used for async tasks, schedulers.
    5. Hash Table/Map - Key-value pairs with fast access. Perfect for caching or lookups.
    6. Tree - hierarchical structure (e.g. DOM is a tree). Used in sorting, searching (BST), representing structure.
    7. Graph - Set of nodes and edges, used for modeling complex relationships (e.g. routing, social networks).
    `,
    category: 'Programming',
  },  {
    question:
      'What are WebSockets? How do they differ from HTTP? Some additional informations?',
    answer: `
    WebSocket is a communication protocol that provides a persistent, full-duplex connection between the client (browser) and server. It's perfect for real-time applications like live chats, live dashboards, multiplayer games, collaborative apps (like google docs).

    How is it different from HTTP?
    1. They are based on persistent connection (vs request-response only).
    2. Direction is 2 way, client and server (vs one way, client to server).
    3. They have low overhead after initial handshake (vs high).
    4. They have very low latency (vs higher).
    5. They are used for real-time apps (vs static websites, APIs).

    Alternatives or Complements
    1. Socket.IO - JS library that simplifies WebSocket usage and adds fallbacks (like long polling).
    2. Firebase Realtime Database - Real time backend-as-a-service.
    `,

    category: 'Programming',
  },
  {
    question: 'What are WEB Components? How they work?',
    answer: `
    Web Components are a set of standardized browser APIs that allow developers to create reusable, encapsulated custom elements - like your own HTML tags - that work natively across modern browsers without needing a framework.

    They consist of 4 main technologies:
    1. Custom Elements
    - define your own HTML elements
    - use class MyElement extends HTMLElement and customElements.define()
    2. Shadow DOM
    - provides encapsulation form styles and markup
    - prevents styles from leaking in or out
    - created using this.attachShadow({ mode: 'open' })
    3. HTML Templates (<template>)
    - define chunks of markup that aren't rendered until used
    - paired with JS to clone and attach to the DOM
    4. ES categorys
    - import/export you rcomponents in a modular way
    - enables reusability and lazy loading

    Why to use Web Components?
    - framework-agnostic (can be used in Angular, React, or plain HTML)
    - encapsulated (styles and logic stay scoped)
    - reusable & portable (build once, use anywhere)
    - native to browser (no runtime or extra libraries required)
    `,
    category: 'Programming',
  },
];

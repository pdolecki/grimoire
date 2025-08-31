import { FlashcardData } from '../../models/flashcard-data';

export const FLASHCARDS_ONGOING: FlashcardData[] = [
  {
    question:
      'How does the "this" keyword behave in arrow functions vs normal functions?',
    answer: `
    Arrow functions
    - no own "this"
    - inherit "this" from surrounding scope (lexical)
    - cannot be changed with call/apply/bind

    Normal functions
    - "this" depends on how they are called (dynamic)
    - can be changed with call/apply/bind
    - can be used as constructors (arrow functions cannot)
    `,
    category: 'JavaScript',
  },
  {
    question:
      'Which of the APIs allows us to add functions to queue of microtasks?',
    answer: `
    APIs that schedule microtasks:
    - Promise.resolve().then(...)
    - queueMicrotask(...)
    - MutationObserver callback

    All of these add functions to the microtask queue (run after the current task, before the next macrotask).
    `,
    category: 'JavaScript',
  },
  {
    question:
      'Which of the APIs allows us to add functions to queue of macrotasks?',
    answer: `
    APIs that schedule macrotasks:
    - setTimeout(...)
    - setInterval(...)
    - setImmediate(...) (Node.js)
    - I/O callbacks
    - postMessage(...)

    All of these add functions to the macrotask queue (exectued after microtasks have been processed).
    `,
    category: 'JavaScript',
  },
  {
    question:
      'What is the difference between microtasks and macrotasks in JavaScript?',
    answer: `
    Microtasks
    - run immediately after the current call stack, before any macrotask
    - Examples: Promise.then, queueMicrotask, MutationObserver

    Macrotasks
    - run after microtasks are cleared, in the event loop cycle
    - Examples: setTimout, setInterval, setImmediate (Node.js), I/O, postMessagee

    Summary
    - microtasks, high priority, always exectued first
    - macrotasks, scheduled later, one per event loop tick
    `,
    category: 'JavaScript',
  },
  {
    question: 'What is WCAG and what are its key principles?',
    answer: `
    WCAG = Web Content Accessibility Guidelines
    - international standard for web accessibility
    - versions 2.0 (2008), 2.1 (2018), 2.2 (2023)

    Key principles (POUR):
    - Perceivable, content needs to be visible & audible
    - Operable, all controls usable by keyboard etc.
    - Understandable, clear, consistent, predictable
    - Robust, works with assistive technologies

    Goal
    Make content accessible to people with disablilities.

    WCAG 2.1
    - contrast 4.5:1 for normal text, 3:1 for large text, 7:1 for AAA compliance
    - all functionality available from keyboard
    - provide alt text for images and not-text content
    - content works with assistive technologies
    - responsive layout, semantic HTML, ARIA when needed

    WCAG 2.2
    Builds on 2.1 with new success criteria:
    - focus apperance (visible focus indicator)
    - dragging movements (must have simple alternative)
    - target size (interactive targets at least 24x24px)
    - accessible authentication (no cognitive test only, e.g. no puzzles)

    WCAG 2.1 focused on mobile, low vision and cognitive needs.
    WCAG 2.2 extends this, improving usability and accessibility.

    `,
    category: 'Programming',
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
  {
    question:
      'In Angular, how do providers, viewProviders, and the injector hierarchy affect service availability?',
    answer: `
    providers
    - registered in a component, available in component view and in projected content
    - good for overriding service instances for component + children

    viewProviders
    - registered only for the component's view (its own template)
    - not visible to content passed via ng-content (content projection)

    root-level providers
    - declared with providedIn: 'root'
    - available as a singleton across the whole app

    hierarchical injectors
    - each component gets its own injector
    - child injectors can shadow or override parent providers
    - useful for creating different instances of the same service in different parts of the app
    `,
    category: 'Angular',
  },
  {
    question:
      'In RxJS, how can you prevent multiple executions of the same HTTP request when mutliple subscribers are involved?',
    answer: `
    By default, each subscription to an Observable (like HttpClient.get) triggers a new execution (multiple HTTP calls). To solve that we use multicasting operators to share one exectuion among all subscribers.

    Common operators
    - share(), turns the source into a hot observable, shares one subscription
    - shareReplay(n), same as share, but also replays last n values to late subscribers
    - publish().refCount(), older way, now replaced by share

    Example:
    this.data$ = this.http.get('/api/users').pipe(shareReplay(1));
    // Now all subscribers reuse the same HTTP response
    `,
    category: 'Angular',
  },
  {
    question: 'What is Angular Ivy, and how to do TView and LView fit into it?',
    answer: `
    Angular Ivy
    - rendering and compilation engine introduced in Angular 9
    - replaced the older View Engine
    - designed for smaller boundels, faster builds, better tree-shaking

    TView
    - static template metadata, created at compile time
    - contains render instructions and binding slots
    - immutable during runtime

    LView
    - dynamic instance created at runtime
    - holds actual DOM references, component state, data values
    - changes as the app runs

    Summary
    - Ivy = new engine (compilation + rendering)
    - TView = static blueprint
    - LView = live instance of a view
    `,
    category: 'Angular',
  },
];

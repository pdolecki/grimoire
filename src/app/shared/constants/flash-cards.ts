import { FlashCard } from '../interfaces/flash-card';

export const FLASH_CARDS: FlashCard[] = [
  {
    question: 'What is hoisting in JavaScript',
    answer: `
    Base:
    Hoisting in JavaScript means that variable and function declarations are moved to the top of their scope (before the code runs). It's as if the declarations are "hoisted" upword during compilation. - Only declarations are hoisted, not initializations.
    
    Advanced:
    In JavaScript, declarations are hoisted to the top of their scope, meaning the engine allocates memory for them before execution. However, only var and function are accessible before their actual line - let, const, and class are hoisted but placed in Temporal Dead Zone, which makes them inaccessible until the engine reaches their line. Understending hoisting is critical for avoiding bugs related to variable shadowing and initialization timing.
    `,
    category: 'JavaScript',
  },
  {
    question: 'What is clousure in JavaScript',
    answer: `
    A clousure is created when a function is defined inside another fuctnion and keeps a reference to the variables form the outer function, even after the outer function is gone from the call stack.
    `,
    category: 'JavaScript',
  },
  {
    question: 'How can you manage/propagate state in Angular?',
    answer: `
    Component State (Local)
    Best for local, short-lived data - use signals, component properties or RxJS subjects.

    Input, Output
    Good for parent-child communication - pass data using input, output and event emitter.

    Shared Service
    Ideal for cross-component or feature-wide state - use RxJS BehaviorSubject or Signals.

    NgRx or SignalStore
    For complex apps use Redux Pattern - central store holds state, actions, reducers and selectors are used for management.

    RouterState 
    Useful for preserving context between views - Angular router can carry state via route parameters, query params or NavigationExtras.
    `,
    category: 'Angular',
  },
  {
    question: 'What design patterns are used in Angular?',
    answer: `
    Dependency Injection
    Services, tokens, modules are injected instead of being hardcoded. This promotes testability and separation of concerns.

    Observer Pattern
    Used in RxJS and component communication. Observables notify subscribers when data changes.

    Module Pattern
    NgModules and standalone components encapsulate functionality and scope.

    Facade Pattern
    Common in state management (e.g. AuthFacade) to hide complexity of NgRx or SignalStore behind a clean API.

    Strategy Pattern
    Used when injecting different behaviors (e.g. different auth strategies). Can be implemented via interfaces + DI.

    Signleton Pattern
    Angular services provided in root or specific modules are singletons.

    Template Pattern
    HTML templates define UI structure, with dynamic binding logic behind the scenes.
    `,
    category: 'Angular',
  },
  {
    question: 'What is a difference between span and div in HTML?',
    answer: `
    div
    Used to group blocks of content, starts on a new line.
    Default - display: block, block-level, for layout and structure

    span
    Used to style or group inline text, without breaking the flow.
    Default - display: inline, inline-level, for styling inline text
    `,
    category: 'HtmlCss',
  },
  {
    question: 'What does the RxJs switchMap do?',
    answer: `
    switchMap maps each emitted value to a new Observable and cancels the previous one if a new value comes in.
    Use when:
    - you want only the latest request to be active
    - you want to cancel previous async operations if a new one starts
    `,
    category: 'Angular',
  },
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
    question: 'How to center a div conent?',
    answer: `
    margin: 0 auto; // width needs to bet

    display: flex;
    justify-content: center;  // horizontal
    align-items: center;  // vertical

    display: grid;
    place-items: center;

    text-align: center; // works for inline elements

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    `,
    category: 'HtmlCss',
  },
  {
    question: 'What are TypeScript generics?',
    answer: `
    Generics let you write reusable, type-safe code by making types flexible but still enforced.
    Instead of hardcoding a type, you use a placeholder (like <T>), and TypeScript will infer or enforce it when the function, class or interface is used.
    A good example of them is they Way Parial and Record Utilities are implemented in TypeScript.

    Example of usage
    In my RPG app, connected to firebase, I have multiple feature collections sotred in firestore. I've created function 
    getFeatureCollection<T>(collectionName: string) 
    that just returns collection asserted as
    Observable<T[]>
    Thanks to that I can use the same function for getting all of my features separately, without the need for some if-ology.
    `,
    category: 'TypeScript',
  },
  {
    question: 'What we get from using SCSS?',
    answer: `
    Reusable Variables
    Declared on root level with $ prefix - e.g. $primary-color: #333; we later on use just background-color: $primary-color;

    Nesting CSS selectors
    Provides us with cleaner structure matching our HTML.

    Mixins & Functions
    Creating Reusable style logic without duplication. Simple example
    @mixin flex-center {..style for flex-center}
    .card { @include flex-center; }

    Inheritance (mixins are better)
    We can share base styles accross classes, simple example
    %base-button {..styles}
    .btn-primary { @extend %base-button }
    `,
    category: 'HtmlCss',
  },
  {
    question:
      'What feature in Angular allows you to globally handle or modify all HTTP requests and responses?',
    answer: `
    HTTP Interceptor
    It is a service that sits between your app and the backend. It allows you to globally inspect, modify, or handle all HTTP requests and responses.
    Examples: Adding auth tokens to requests, logging, global error handling, showing/hiding loading spinners, retrying failed requests. 
    `,
    category: 'Angular',
  },
  {
    question:
      'What Angular feature helps you controll access to routes based on authentication, roles or another logic?',
    answer: `
    Guards
    They are Angular features that let you control access to routes based on coditions like:
    - Is the user authenticated?
    - Does the user have a required role?
    - Has the form been filled out or saved?

    Use guards to enforce rules before navigation happens. Perfect for auth, roles, or custom logic like feature flags.
    `,
    category: 'Angular',
  },
  {
    question: 'What are the ways to optimize Angular applications?',
    answer: `
    Using ChangeDetectionStrategy.OnPush
    This limits unnecessary checks. Should be combined with signals or immutable data for better performance.

    Lazy Loading
    Load feature modules oly when needed via Angular Router.

    Standalone Component
    Reduce complexity and eliminate unnecessary modules.

    Bundle Size Optimizationns
    Use ng build --prod (or --configuration production) to enable: Tree shaking, minification, AOT Compilation. You can also use CLI's built-in source map analyzer to detect heavy libraries.

    Code Splitting & Preloading
    You can split routes smartly and preload critical ones with PreloadAllModules, avoid putting everything in AppModule.

    Avoid Heavy Imports
    Import only what you use (e.g. don't import all of Angular Material). Use standalone components from Angular Material to avoid unused code.

    Use TrackBy in for loops.
    This prevent DOM re-renders during list changes.

    Efficient RxJs Use
    Remember to unsubscribe, use operators like switchMap to cancel redundant requests, avoid memory leaks.

    Caching & Memoization
    Cache HTTP responses where possible. Use computed() with signals to avoid recomputing unchanged values.

    Optimize Images & Assets
    Use WebP, SVGs, responsive images. Compress icons/assets and serve them via CDN.
    `,
    category: 'Angular',
  },
  // {
  //   question: '',
  //   answer: ``,
  //   category: ''
  // },
];

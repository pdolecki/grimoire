import { Flashcard } from '../interfaces/flash-card';

export const FLASHCARDS: Flashcard[] = [
  {
    question: 'What is hoisting in JavaScript?',
    answer: `
    Hoisting in JS means that variable and function declarations (not initializations) are moved to the top of their scope during compilation phase (before execution).
    1. var:
    - hoisted and initialized with undefined
    - it can be referenced before declaration
    2. let, const:
    - hoisted, but placed in Temporal Dead Zone
    - referencing before declaration throws a ReferenceError
    3. function declarations:
    - fully hoisted 
    - can be called before their definition
    4. function expression:
    - treated like variables, only name is hoisted
    - calling them early results in TypeError
    `,
    category: 'JavaScript',
  },
  {
    question: 'What is clousure in JavaScript and how can it be useful?',
    answer: `
    A clousure is a function that remembers the variables from the scope in which it was created. It applies even after the outer scope has finished execution.
    Extra info:
    - that is caused by JS functions forming a lexical closure (capture and retain access to their surrounding scope at the time of definition)
    - in Angular we use that for creating private variables in services, building factory functions, managing callback state
    `,
    category: 'JavaScript',
  },
  {
    question: 'How can you manage/propagate state in Angular?',
    answer: `
    1. Component State (local)
    - best for local, short-lived data
    - use signals, component properties or RxJS subjects
    2. Input, Output
    - good for parent-child communication
    - using input/output and event emitter
    3. Shared Service
    - ideal for cross-component or feature-wide state
    - use RxJS BehaviorSubject or Signals
    4. NgRx or SignalStore
    - for complex apps use Redux Pattern 
    - central state store, actions, reducers and selectors
    5. RouterState
    - useful for preserving context between views
    - Angular router can carry state via route parameters, query params or Navigation Extras
    `,
    category: 'Angular',
  },
  {
    question: 'What design patterns are used in Angular?',
    answer: `
    1. Dependency Injection
    Services, tokens, modules are injected instead of being hardcoded. This promotes testability and separation of concerns.
    2. Observer Pattern
    Used in RxJS and component communication. Observables notify subscribers when data changes.
    3. Module Pattern
    NgModules and standalone components encapsulate functionality and scope.
    4. Facade Pattern
    Common in state management (e.g. AuthFacade) to hide complexity of dependencies (e.g. NgRx, SignalStore) behind a clean API.
    5. Strategy Pattern
    Used when injecting different behaviors (e.g. different auth strategies). Can be implemented via interfaces + DI.
    6. Singleton Pattern
    Angular Services provided in root or specific modules are singletos.
    7. Template Pattern
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
    category: 'HTML/CSS',
  },
  {
    question: 'What does the RxJS switchMap do?',
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
    category: 'General',
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
    category: 'HTML/CSS',
  },
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
    category: 'HTML/CSS',
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

    Efficient RxJS Use
    Remember to unsubscribe, use operators like switchMap to cancel redundant requests, avoid memory leaks.

    Caching & Memoization
    Cache HTTP responses where possible. Use computed() with signals to avoid recomputing unchanged values.

    Optimize Images & Assets
    Use WebP, SVGs, responsive images. Compress icons/assets and serve them via CDN.
    `,
    category: 'Angular',
  },
  {
    question:
      'What happens when you set ChangeDetectionStrategy.OnPush on a Angular component?',
    answer: `
    Setting ChangeDetectionStrategy.OnPush tells Angular to only run change detection for a component when one of its input properties changes by reference, or a reactive signal or observable emits.
    
    This improves performance by skipping unnecessary re-rendering of compnonents whose inputs or reactive dependencies haven't changed.
    `,
    category: 'Angular',
  },
  {
    question:
      'How would you unit test a component that has a service injected and calls one of its methods during ngOnInit()?',
    answer: `
    First I'd create a mock version of the service, either plain object with Jasmine spies or using jest.fn() if using Jest.
    In the test setup (TestBed.configureTestingModule) I'd provide this mock in place of the real service using the providers array.
    Then, after creating the component via TestBed.createComponent, I'd call fixture.detectChanges() to trigger ngOnInit().
    Finally, I'd assert that the service method was called, ppossibly checking the arguments or the results if the method affects component state.

    If the method returns an Observable, I'd mock it to return a of(mockData) stream and use the async pipe or fakeAsync + tick() in the test to flush the observable.
    `,
    category: 'Angular',
  },
  {
    question:
      'What is the difference between RxJS mergeMap, concatMap and switchMap?',
    answer: `
    switchMap - cancels the previous inner observable when a new value arrives. Use when only the latest response matters (e.g. typeahead or search input).

    mergeMap - runs all inner observables in parallel. Use when you want to fire multiple requests and don't care about order (e.g. bulk saving multiple form entries).
    
    concatMap - queues inner observables and runs them one after another in order. Use when order matters (e.g. submitting form steps or commands sequentially).
    `,
    category: 'Angular',
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
    High-level modules shouldn't depend on low-level modules - both should depend on abstractions. In Angular, we avoid directly using 3rd-party services inside components. Instead, we create facade services that depend on interfaces, and inject implementations. This keeps the app testable and swappable.
    `,
    category: 'General',
  },
  {
    question:
      'What is the Event Loop in JS and how it manage async operations?',
    answer: `
    The Event Loop is the mechanism in JavaScript that handles asynchronous operations, allowing non-blocking code to run in a single-threaded environment.

    1. JS runs a function -> it eneters the call stack.
    2. If it hits something async (e.g. setTimeout), that is sent to Web APIs.
    3. When async work completes, the callback is moved to a queue.
    4. The Event Loop:
    > waits until the stack is empty
    > then runs all microtasks
    > then runs one task from the macrotask queue
    > repeats

    The Event Loop keeps the JS engine resposive by coordinating when and how async callbacks are executed. It ensures microtasks (like Promises) run before macrotasks (like setTimeout).
    `,
    category: 'JavaScript',
  },
  {
    question: 'What are Angular decorators, and how do they work?',
    answer: `
    Decorators in Angular are TypeScript functions that attach metadata to classes, methods, properties or parameters. They allow Angular's compiler and DI system to understand how to construct and use these elements at runtime.
    1. Class decorators (Component, Directive, Module) - define what the class represents and how Angular should treat it.
    2. Property decorators (Input, Output) - tell Angular to bind a property to external data or events.
    3. Method decorators (HostListener, HostBinding) - allow interaction with DOM events or element properties.
    4. Parameter decorators (Inject) - help Angular understand how to resolve constructor dependencies, especially when using tokens.

    Under the hood, Angular uses the Reflect Metadata API to read and store this metadata. For example, @Injectable() marks a class es eligible for dependency injection, and Angular registers it in the injector tree.

    A practical example - use @HostListener('document:click') to close a dropdown when clicking outside of it (instead of manually wiring up DOM listeners).
    `,
    category: 'Angular',
  },
  {
    question:
      'What are Signals in Angular, and how do they compare to Observables or traditional Change Detection approaches?',
    answer: `
    Signals are a new reactive primitive introduced in Angular 16 to manage state and reactivity in a more predictable way. They are part of Angular's move toward fine-grained, reactive system that improves performance and developer experience (compared to traditional Zone.js-based change detection).

    A Signal is a value container that tracks dependencies and notifies consumers. They have automatic cleanup, native Angular templates and inputs integration, use case is mostly local UI state.

    1. They improve performance (no need for Zone.js).
    2. Fine Grained reactivity - only parts of DOM that depend on signals are re-rendered.
    3. Easier to reason about (especially with computed and effect).
    `,
    category: 'Angular',
  },
  {
    question: 'What is SignalStore in Angular?',
    answer: `
    SignalStore is a lightweight, reactive state management solution introduced in Angular 17. It's built on top of Signals, and offers a simpler alternative to NgRx or plain services for managing components or feature-level state. It uses:
    - signal() to store state
    - computed() to derive state
    - effect() to react to changes
    - methods() to update state (similiar to reducers)
    It's similiar to @Injectable() service, but with built-in reactivity and type safety, and without the boilerplate of actions, reducers, selectors from NgRX. Example of SignalStore:
    @Injectable()
    export class CounterStore extends signalStore({ state: { count: 0 } }) {
  
      readonly double = this.computed(() => this.state().count * 2);

      increment = this.updater((state) => ({
        ...state,
        count: state.count + 1
      }));
    }

    SignalStore gives you the power of reactive state management with almost no setup. It is also perfect for when the NgRx would be overkill.
    `,
    category: 'Angular',
  },
  {
    question: 'What is Angular lifecycle and what are lifecycle hooks?',
    answer: `
    The Angular component lifecycle is the series of steps Angular goes through from creating, rendering, checking and destorying a component.
    We have lifecycle hooks that are methods that we can implement to run some logic at specific stages.

    During the initialization the order is:
    1. constructor - class is created
    2. ngOnChanges - called when input properties change
    3. ngOnInit - runs once, ideal for fetching initial data
    4. ngDoCheck - custom change detection logic (advanced)
    5. ngAfterContentInit/Checked - after ng-content projection is initialized/checked
    6. ngAfterViewInit/Checked = after the component's view and child views are initialized/checked
    7. afterNextRender - Angular 18+, runs after initial render
    8. afterEveryRender - runs after every render cycle

    After initialization, during change detection cycles:
    ngOnChanges (if input changed) > ngDoCheck > ngAfterContentChecked > ngAfterViewChecked > afterRender

    Finally for both scenarios - ngOnDestroy when component is destroyed.

    Real world use cases:
    - ngOnInit (to trigger a data fetch when component loads)
    - ngAfterViewInit (when you need accesss to @ViewChild() elements)
    - ngOnDestroy (to clean up subscriptions or interval timers)
    `,
    category: 'Angular',
  },
  {
    question:
      'Difference between a monolith and a microservice architecture? When to choose which?',
    answer: `
    A monolith is a single, unified application where all features are built and deployed together.
    A microservice architecture breaks the app into independent services, each owning its own domain logic. These services communicate via APIs.

    Rule of thumb would be to start with a well-structured monolith and extract microservices only when scaling, ownership, or performance demand it.
    `,
    category: 'General',
  },
  {
    question: 'Angular forms - what are the options?',
    answer: `
    Template-Driven Forms
    They defeine form structure in the template with help of directives like ngModel. They are suitable for simple forms with minimal logic, good use case for two-way binding. They are hard to test and scale.

    Reactive Forms
    They define form structure in component class using FormGroup, FormControl and FormBuilder. They are fully programmatic, synchronous and type-safe. Easy to test, validate and build dynamically. Only downside is that they can be verbose and iperative.

    Signal-Based Forms (Angular 20+)
    They are based on Signals, uses builder-based API (createFormGroup, FormControl). They feel more reactive and declarative, they are fully integrated with Signals ecostystem and fine-grained reactivity.
    `,
    category: 'Angular',
  },
  {
    question: 'What is Domain Driven Design?',
    answer: `
    DDD is a software design approach focused on modeling software based on real business domains, using ubiquitus language and organizing code around the business logic, not technical layers.

    It helps to keep the code aligned with the real business, design modular and maintainable system, avoids models with just data and without behavior and makes refactoring and scaling easier as your domain grows.
    `,
    category: 'General',
  },
  {
    question:
      'What are the most common tests in Angular? What are the best testing practices?',
    answer: `
    Unit tests - they test inividual pieces in isolations.
    Integration tests - test how compontents and services work together.
    End-to-end tests - test the app from the user's perspective.

    Best Practices:
    1. Test Behavior, not implementaion (test what it does, not how it works).
    2. Keep unit tests fast and isolated (use mocks to avoid real life dependencies).
    3. Don't test Angular and 3-rd party dependencies (test only your application).
    4. Write meaningful tests and test names.
    5. Mock external dependencies.
    `,
    category: 'Angular',
  },
  {
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
    category: 'General',
  },
  {
    question: 'What is DOM?',
    answer: `
    Document Object Model is a programming interface that represents the structure of a web page as a tree of nodes (elements, attributes, text, etc.).
    When the browser loads HTML, it parses it and buils the DOM - where each HTML tag becomes a node in a tree-like structure.
    This structure lets JS interact with page:
    - read or modify content (element.textContent, element.innerHtml)
    - change styles (element.style)
    - handle events (element.addEventListener)

    In Angular we rarly manipulate the DOM directly, instead we use Angular own abstarction (Renderer, ViewRef, etc.) and handle DOM updates efficiently through change detection.
    `,
    category: 'General',
  },
  {
    question: 'What are Promises, Observables and Subjects?',
    answer: `
    Promise - represents a single future value from an asynchronous operation (e.g. HTTP call, file read). Key features:
    - Eager (starts executing immediately)
    - One-time (can resolve then or reject catch only once)
    - Chaining (supports chaining with .then and .catch)

    Observable - stream of asynchronous values. It can emit multiple values over time. Key features:
    - Lazy (starts when subscribed)
    - Multi-value (can emit values multiple times)
    - Supports Operators (like map, filter, switchMap)
    - Cancellable (can unsubscribe)

    Subject - It is both an Observable and an Observer. It allows multicasting - pushing values to multiple subscribers. Key features:
    - Can manually emit values (next)
    - Used for cross-component communication
    - Can act as a bridge between imperative and reactive code
    Types of Subjects:
    - Subject (basic version)
    - BehaviorSubject (holds a current value, great for state)
    - ReplaySubject (replays past values to new subscribers)
    - AsyncSubject (only emits the last value on completion)
    `,

    category: 'Angular',
  },
  {
    question:
      'What are Resolvers and Interceptors in Angular? How do they differ?',
    answer: `
    Resolver - service that runs before a route is activated. It fetches data in advance and makes it available to the component via the ActivatedRoute. It's defined in the route configuration with the resolve key, and it ensures that your component gets the data immediately on load, not ofter it has rendered.
    Use Case:
    You want to load required data (like a user profile or article content) before diplaying a route).

    When it runs?
    1. Resolver - before a route is activated
    2. Interceptor - before/after every HTTP request/response

    Where it's used?
    1. Resolver - in routing configuration
    2. Interceptor - globally in HTTP layer

    Purpose?
    1. Resolver - pre-fetch data required by a component
    2. Interceptor - modify HTTP requests/responses (auth, logs)

    Data Access?
    1. Resolver - ActivatedRoute (e.g. route.data['user'])
    2. Interceptor - transparent, affects all HTTP calls
    `,
    category: 'Angular',
  },
  {
    question: 'WEB Workers and Service Workers in Javascript?',
    answer: `
    A WEB Worker allows you to run JavaScript in a background thread, separate from the main UI thread. Use them to offload CPU-heavy tasks (like calculations, parsing large data, etc.) so your app doesn't freeze or become unresponsive.
    - they do not have access to the DOM
    - they communicate with the main thread via postMessage
    - you can create them using the Worker constructor and pass in a script

    A Service Worker is a type of proxy that runs in the background, independent of your web page, and intercepts network requests. We use them to enable offline support, cache assets or API responses, create PWAs, handle background sync and push notifications.
    - they operate between the browser and network
    - they run in a separate thread
    - they can intercept and cache network requests using the Cache API
    - they require HTTPS (except on localhost)
    They have lifecycle of register > install > activate > fetch (events).
    `,
    category: 'JavaScript',
  },
  {
    question:
      'If we have in Angular service provided in root, but we add it to the providers array of standalone component - will it be the same instance as globally or a new one? Will it survive if the component gets destroyed?',
    answer: `
    Angular will create a new instance of the service scoped to the component. It will not reuse the global singleton from the root injector.
    Furthermore, this new instance will be destroyed when the component is destroyed, unless other components in the same injector tree are still using it.
    `,

    category: 'Angular',
  },
  {
    question: 'What are Promises, how can you cancel a Promise in JavaScript?',
    answer: `
    Promise is a built-in JS object that represents the eventual completion (or failure) of an asynchronous operation. It has 3 states:
    - pending (initial state)
    - fulfilled (operation completed successfully)
    - rejected (operation failed)

    Promises cannot be canceled natively once started. However we can simulate cancellation using:
    - AbortController
    - Custom Cancelable Promise Wrapper
    It doesn't stop underlying task, just prevents .then() from resolving
    `,

    category: 'JavaScript',
  },
  {
    question: 'What is async/await in JavaScript?',
    answer: `
    async/await is syntatic sugar over Promises. It makes asynchronous code look and behave like synchronous code.
    - await pauses execution unil the Promise settles
    - can only be used inside async function
    - handles error with try catch block
    `,
    category: 'JavaScript',
  },
  {
    question: 'What is Overloading in JavaScript and Angular?',
    answer: `
    Overloading - refers to defining multiple function signatures with the same name but different parameters (type, number, or both). It helps make code more flexible and expressive, depending on how a function is called. Use for:
    - to handle different input types or formats in one function
    - to improve readability and reduce code duplication

    JavaScript 
    Does not support real function overloading, it will just override declaration of function with the last one. We can simulate it using function with else-if blocks checking arguments.length and typeof arguments.

    TypeScript (Angular also)
    Supports overloading, you can define multiple signatures.
    `,
    category: 'JavaScript',
  },
  {
    question: 'What is @defer in Angular?',
    answer: `
    @defer is a block-based syntax that lets you lazy-load parts of the UI only when needed, without extra routing or manual logic.
    It allows Angular to delay rendering a block of HTML until a certain condition or trigger occurs - improving performance, especially in large apps.
    You can use triggers:
    - @defer (on idle) {}
    Or you can go with basic syntax:
    - @defer{}@placeholder{}@error{}@loading{}
    `,
    category: 'Angular',
  },
  {
    question:
      'What is content projection in Angular? Can we project multiple things?',
    answer: `
    Content Projection is the mechanism Angular uses to pass content from a parent component into a child component's template.
    It's like putting custom content inside a component - think of it like slot in Web Components or ng-content in Angular.

    You can put multiple pieces of content using multiple slots. Angular uses attribute selectors in select="" to decide what content goes where.
    In component:
    <header><ng-content select="[title]"></ng-content></header>
    <section><ng-content select="[body]"></ng-content></section>
    In usage:
    <h1 title>This is the title</h1>
    <p body>This is the body</p>
    `,
    category: 'Angular',
  },
  {
    question:
      'What is the difference between ng-container and ng-template in Angular?',
    answer: `
    ng-container:
    Use to group elements without cluttering the DOM.
    - no extra DOM element (invisible wrapper)
    Think about it as invisible div.
    <ng-container *ngIf="isLoggedIn">
      <h1>Welcome!</h1>d
    </ng-container>

    ng-template:
    Use to define templates that can be reused or rendered conditionally later.
    - not rendered at all (unless explicit use e.g. ngTemplateOutlet)
    Think about it as Saved snippet of HTML logic for later use
    <ng-template #loading>
      <p>Loading...</p>
    </ng-template>

    <ng-container *ngTemplateOutlet="loading"></ng-container>
    `,
    category: 'Angular',
  },
  {
    question:
      'What happens to a Promise/Observable/Subject when triggered by a component (e.g. HTTP call) and the component is destroyed by navigation before it returns?',
    answer: `
    Promise
    It cannot be canceled, if component triggers it (e.g. via fetch() or async/await) and navigates away:
    - the Promise will still resolve or reject, regardless of the component's destruction
    - if the result is used to update the destroyed component it may cause ExpressionChangedAfterItHasBeenChecked errors or memory leaks (especially in manual logic or setState scenarios)

    Observable
    It can be canceled by unsubscribing. If you trigger HTTP call, the Observable starts emitting only after subscription. 
    - If you do not unsubscribe manually and the observable emits after component is destroyed Angular won't throw, but it can lead to memory leaks or unintended behavior.

    Subject
    Subject is a mutlicast stream - it doesn't automatically complete or stop. If you subscribed to a Subject inside the component and don't unsubscribe:
    - emissions will still arrive, even after the component is destroyed
    - this can cause leaks or trying to update destroyed views
    `,
    category: 'Angular',
  },
  {
    question: 'What are common RxJS operators and what they do?',
    answer: `
    Mostly used operators:

    1. Creation Operators
    - of(...values) - creates observables from static values
    - from(array | promise) - creates from iterable or promise

    2. Transformation Operators
    - map(fn) - transforms emitted values
    - switchMap(fn) - cancels previous inner observable when new value arrives
    - mergeMap(fn) - flattens and runs all inner observables in parallel
    - concatMap(fn) - queues inner observables and runs them one-by-one
    - exhaustMap(fn) - ignores new emissions while the previous one is running

    3. Filtering Operators
    - filter(fn) - passes through only values matching condition
    - take(n) - takes the first n value then completes
    - takeUntil(notifiers$) - completes observable when another emits
    - debounceTime(ms) - waits for ms pause in emissions
    - distinctUntilChanged() - skips repeated values

    4. Combination Operators
    - combineLatest([a$, b$]) - emits when any source emits with latest values
    - forkJoin([a$, b$]) - waits for all observables to complete, then emits once
    - withLatestFrom(other$) - combines current value with latest from another stream
    - zip(a$, b$) - emits only when all observables emit once, in order

    5. Error Handling Operators
    - catchError(fn) - handle errors and return fallback or rethrow
    - retry(n) - retry the source on error up to n times

    6. Utlility Operators
    - tap(fn) - for side effects, doesn't modify the value
    - finalize(fn) - runs when observable completes or errors
    - delay(ms) - delays each emission
    `,
    category: 'Angular',
  },
  {
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

    category: 'General',
  },
  {
    question:
      'You have a search field above a data table. Every time user types, it triggers a backend API call. There are too many requests. How would you handle this problem in Angular?',
    answer: `
    The most straightforward way would be to use RXJS:
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((value) => this.backendService.search(value))
    ).subscribe((results) => {
      this.tableData = results;
    });

    debounceTime(300) - waits 300ms after the user stops typing
    distinctUntilChanged() - prevents duplicate calls for the same input
    switchMap() - cancels previous request if a new one comes in

    Additional UX enchancments:
    - add a loading spinner while the request is pending
    - handle empty strings
    - optionally use a manual search button for very slow APIs
    *** For big apps: cache results, use paginated responses, throttle scrolls
    `,

    category: 'Angular',
  },
  {
    question:
      'You are building a login form in Angular. User click the Login button multiple times quickly, causing multiple API calls to the backend. How would you prevent this and ensure only one login attempt is processed?',
    answer: `
    Basic UI-based solution:
    Disable the login button while the request is pending or add a loading spinner and set a flag guard in method sending request.

    RxJS-based:
    Use exhaustMap() to ensure only the first click is handled until that requests completes - all other clicks are ignored during that time.
    `,
    category: 'Angular',
  },
  {
    question:
      'How would you handle a situation where the user keeps triggering data creation, causing multiple heavy backend requests to be fired - especially when each request takes a long time to complete?',
    answer: `
    1. Debounce the user input
    If the trigger is based on user typing or interaction, wrap the event with a debounceTime (observables) or setTimeout debounce (for signals or event handlers).
    this.form.valueChanges.pipe(
      debounceTime(500),
      switchMap((value) => this.api.createData(value))
    ).subscribe();

    2. Disable further trigger while waiting
    Disable the form or interaction source while a request is in flight.
    this.loading = true;
    this.api.createData(data).subscribe({
      next: () => this.loading = false,
      error: () => this.loading = false
    });

    Additional UI ideas:
    - use confirmation dialogs before sending final creation request
    - visual feedback like loading spinners or disabling buttons
    - consider auto-save logic with explicity Save button
    `,
    category: 'Angular',
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
    4. ES Modules
    - import/export you rcomponents in a modular way
    - enables reusability and lazy loading

    Why to use Web Components?
    - framework-agnostic (can be used in Angular, React, or plain HTML)
    - encapsulated (styles and logic stay scoped)
    - reusable & portable (build once, use anywhere)
    - native to browser (no runtime or extra libraries required)
    `,
    category: 'General',
  },
  {
    question: 'What are Angular PWA?',
    answer: `
    An Angular Progressive Web App is a web application built with Angular that uses modern browser features to behave like a native app - it can work offline, load instantly, and be installed on a user's device (mobile or desktop).

    Key Features of Angular PWAs:
    1. Offline support
    Uses a service worker to cache assets and API responses for offline use.
    2. App-like experience
    Can be installed and opened in full-screen like native apps.
    3. Fast loading
    Cached files load instantly, even on slow or no network.
    4. Push notifications (optional)
    Re-engage users with notifications.
    5. Save
    Must be served over HTTPS for security.
    `,
    category: 'Angular',
  },
  {
    question: 'What are core JS Collections?',
    answer: `
    1. Map
    - Map allows keys of any type (including objects, functions)
    - Maintains insertion order
    - has .size, .set, .get, .has, .delete
    - better for frequent additions/removals
    2. Set
    - A collection of unique values (no duplicates)
    - Has .add, .has, .delete, .clear
    - Great for deduplication, caching, filtering
    3. WeakMap
    - Keys must be objects
    - Keys are weakly held (not preventable from garbage collection)
    - No size or iteration (non-enumerable)
    - Use: memory-safe stsorage for private data tied to DOM nodes or class instances
    4. WeakSet
    - Like Set but only for objects
    - non-enumerable, weakly held
    `,
    category: 'JavaScript',
  },
  {
    question: 'How to optimize frontend on low-level?',
    answer: `
    1. Avoid Reflows/Repaints
    - Use requestAnimationFrame for animations
    - Batch DOM reads and writes
    - Minimize layout thrashing (e.g. reading offsetHeight followed by a DOM write)
    2. Efficient Data Structures
    - Use Map/Set for faster lookups than arrays
    - Debounce or throttle high-frequency events (e.g. resize, scroll, search)
    3. Avoid memory leaks
    - Clean up event listeners
    - Unsubscribe from Observables (especially in Angular)
    4. Use Web Workers (multi-threading)
    - Offload heavy computation off the main thread
    - Use postMessage() to cummunicate between worker and main thread
    - Perfect for sorting, parsing, crunching large datasets
    5. Lazy Load Modules, Images
    - loading="lazy" for images
    - Route-based code splitting in Angular
    `,
    category: 'General',
  },
  {
    question: 'What is multi-threading in JS?',
    answer: `
    JavaScript is single-threaded, but:
    1. Web Workers
    - separate background thread
    - cannot access DOM
    - used for calculations, compression, parsing
    2. Service Workers
    - proxy layer between web app and network
    - used for caching, offline support, push notifications
    3. Atomics and SharedArrayBuffer
    - true shared memory and synchronization between threads
    - advanced use case like rendering, image processing
    `,
    category: 'JavaScript',
  },
  {
    question:
      'What are Resolvers in Angular? User sees blank screen or loading every single time when we fetch data in ngOnInit().',
    answer: `
    Resolvers let Angular wait for the data first, then load the page with everything ready.
    Instead of:
    1. Load component -> 2. Fetch data -> 3. Update UI
    You get:
    1. Fetch data -> 2. Load component (with data ready)

    How to create flow?
    1. Create a service
    export class UserService {
      getUser(id: string) {
        // In real apps, this would call a server/API
        return of({ id, name: 'Tony', age: 30 }); // returns Observable
      }
    }

    2. Create a resolver function
    export const userResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      const userService = inject(UserService);
      const userId = route.paramMap.get('id')!;
      return userService.getUser(userId); // returns the user info
    };

    3. Use the resolver in the route (app.routes)
    export const routes: Routes = [
      {
        path: 'profile/:id',
        component: ProfileComponent,
        resolve: {
          user: userResolver
        }
      }
    ];

    4. Access the data in the component (Refactored using Signals)
    After the resolver fetches the user info, the component can access it using Signals for a cleaner, reactive setup.

    export class ProfileComponent {
      private route = inject(ActivatedRoute);
      private data = toSignal(this.route.data); // convert resolver data to a signal

      user = computed(() => this.data().user); // create a reactive user signal
    }


    Why to use resolvers?
    1. Prevent empty UI
    2. Avoid complex loading spinners
    3. Handle errors early
    4. Improved UX
    `,
    category: 'Angular',
  },
  // {
  //   question: 'Ways of connecting JS to HTML?',
  //   answer: ``,
  //   category: 'JavaScript'
  // },
  // {
  //   question: 'What to use id or class selectors in HTML/CSS?',
  //   answer: ``,
  // },
  // {
  //   question: '',
  //   answer: ``,
  // },
  // {
  //   question: '',
  //   answer: ``,
  // },
];

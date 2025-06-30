import { FlashCard } from '../interfaces/flash-card';

export const FLASH_CARDS: FlashCard[] = [
  {
    question: 'What is hoisting in JavaScript',
    answer: `
    Hoisting in JavaScript means that variable and function declarations are moved to the top of their scope during the compilation phase, before code execution. Only declarations are hoisted — not initializations.
    - var is hoisted and initialized with undefined, so it can be referenced before its declaration (though it’s usually a bad idea).
    - let and const are hoisted too, but placed in the Temporal Dead Zone — referencing them before the declaration line throws a ReferenceError.
    - function declarations are fully hoisted and can be called before their definition.
    - function expressions (especially those declared with let or const) are treated like variables: only the variable name is hoisted — not the function body — so calling them early results in a TypeError.
    `,
  },
  {
    question: 'What is clousure in JavaScript and how can it be useful?',
    answer: `
    A closure is a function that remembers the variables from the scope in which it was created - even after that outer scope has finished execution.
    This happens because functions in JavaScript form a lexical closure; they caputre and retain access to their surrounding scope at the time they are defined.
    In Angular we use that for creating private variables in services, building factory functions, managing callback state (setTimeout, eventListeners, or RxJS operators).
    `,
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
  },
  {
    question: 'What does the RxJS switchMap do?',
    answer: `
    switchMap maps each emitted value to a new Observable and cancels the previous one if a new value comes in.
    Use when:
    - you want only the latest request to be active
    - you want to cancel previous async operations if a new one starts
    `,
  },
  {
    question: 'What is the difference between composition and inheritance?',
    answer: `
    Composition - one class contains instances of other classes or functions to use their behavior.
    Has-a relationship - Car has an Engine, UIComponent, uses TooltipService

    Inheritance - one class extends another, reusing and overriding its behavior.
    Is-a relationship - AdminUser extends User
    `,
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
  },
  {
    question:
      'What feature in Angular allows you to globally handle or modify all HTTP requests and responses?',
    answer: `
    HTTP Interceptor
    It is a service that sits between your app and the backend. It allows you to globally inspect, modify, or handle all HTTP requests and responses.
    Examples: Adding auth tokens to requests, logging, global error handling, showing/hiding loading spinners, retrying failed requests. 
    `,
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
  },
  {
    question:
      'What happens when you set ChangeDetectionStrategy.OnPush on a Angular component?',
    answer: `
    Setting ChangeDetectionStrategy.OnPush tells Angular to only run change detection for a component when one of its input properties changes by reference, or a reactive signal or observable emits.
    
    This improves performance by skipping unnecessary re-rendering of compnonents whose inputs or reactive dependencies haven't changed.
    `,
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
  },
  {
    question:
      'What is the difference between RxJS mergeMap, concatMap and switchMap?',
    answer: `
    switchMap - cancels the previous inner observable when a new value arrives. Use when only the latest response matters (e.g. typeahead or search input).

    mergeMap - runs all inner observables in parallel. Use when you want to fire multiple requests and don't care about order (e.g. bulk saving multiple form entries).
    
    concatMap = queues inner observables and runs them one after another in order. Use when order matters (e.g. submitting form steps or commands sequentially).
    `,
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
  },
  {
    question:
      'Difference between a monolith and a microservice architecture? When to choose which?',
    answer: `
    A monolith is a single, unified application where all features are built and deployed together.
    A microservice architecture breaks the app into independent services, each owning its own domain logic. These services communicate via APIs.

    Rule of thumb would be to start with a well-structured monolith and extract microservices only when scaling, ownership, or performance demand it.
    `,
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
  },
  {
    question: 'What is Domain Driven Design',
    answer: `
    DDD is a software design approach focused on modeling software based on real business domains, using ubiquitus language and organizing code around the business logic, not technical layers.

    It helps to keep the code aligned with the real business, design modular and maintainable system, avoids models with just data and without behavior and makes refactoring and scaling easier as your domain grows.
    `,
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
  },
  // {
  //   question: '',
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
  // {
  //   question: '',
  //   answer: ``,
  // },
];

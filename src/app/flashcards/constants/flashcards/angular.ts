import { FlashcardData } from '../../models/flashcard-data';

export const FLASHCARDS_ANGULAR: FlashcardData[] = [
  {
    question: 'How can you manage/propagate state in Angular?',
    answer: `
    Component State (local)
    - best for local, short-lived data
    - use signals, component properties or RxJS subjects

    Input/Output
    - parent-child communication
    - input, output and event emitters

    Shared Services
    - good for cross-component or feature-wide state
    - use RxJS BehaviorSubjects or Angular signals

    NgRx or SignalStore
    - for complex apps (Redux pattern)
    - central store, actions, reducers, selectors

    Router State
    - preserve context between views
    - pass state via route params, query params, NavigationExtras
    `,
    category: 'Angular',
  },
  {
    question: 'What design patterns are used in Angular?',
    answer: `
    Dependency Injection
    - services,tokens injected, not hardcoded (testable & decoupled)

    Observer Pattern
    - RxJS Observables notify subscribers on data changes

    Module Pattern
    - NgModules/standalone components encapsulate scope and functionality

    Facade Pattern
    - abstract complex logic (e.g. NgRx store) behind a clean service API

    Strategy Pattern
    - swap behaviors via DI (e.g. differnt auth strategies)

    Singleton Pattern
    - services providedIn: 'root' or in modules (one inctance per injector)

    Template Pattern
    - Angular templates separate structure from dynamic logic
    `,
    category: 'Angular',
  },
  {
    question: 'What does the RxJS switchMap do?',
    answer: `
    switchMap maps each emitted value to a new Observable, and cancels the previous one if a new value comes in.

    When to use?
    - you only want the latest request to be active
    - you want to cancel previous async operations when a new one starts

    Example:
    Typing in a search box, cancels old HTTP calls, only latest query matters.
    `,
    category: 'Angular',
  },
  {
    question:
      'What feature in Angular allows you to globally handle or modify all HTTP requests and responses?',
    answer: `
    HTTP Interceptors
    - Service that sits between app and backend
    - Lets you inspect, modify, or handle requests/responses globally

    Common use cases:
    - Add auth tokens to requests
    - Global error handling
    - Logging
    - Show/hide loading spinners
    - Retry failed requests
    `,
    category: 'Angular',
  },
  {
    question:
      'What Angular feature helps you control access to routes based on authentication, roles or other logic?',
    answer: `
    Guards
    - Decide if navigation to a route is allowed
    - Conditions can include:
      • Is the user authenticated?
      • Does the user have the required role?
      • Has a form been saved/filled out?

    Use cases:
    - Protect routes with auth
    - Enforce roles or feature flags
    - Prevent navigation if form is dirty
    `,
    category: 'Angular',
  },
  {
    question: 'What are the ways to optimize Angular applications?',
    answer: `
    Change Detection
    - Use ChangeDetectionStrategy.OnPush + signals/immutable data

    Lazy Loading
    - Load feature modules/components only when needed

    Standalone Components
    - Reduce complexity, avoid unnecessary NgModules

    Bundle Size
    - ng build --configuration production → tree-shaking, minification, AOT
    - Use source-map analyzer to find heavy libs

    Code Splitting & Preloading
    - Split routes wisely, preload critical ones
    - Avoid putting everything in AppModule

    Imports
    - Import only what you use (avoid full Angular Material)

    Rendering
    - Use trackBy in *ngFor to avoid re-renders

    RxJS
    - Use switchMap to cancel redundant requests
    - Unsubscribe properly to avoid leaks

    Caching & Memoization
    - Cache HTTP responses
    - Use computed() with signals to avoid recomputation

    Assets
    - Optimize images (WebP, SVG, responsive sizes)
    - Compress assets, serve via CDN
    `,
    category: 'Angular',
  },
  {
    question:
      'What happens when you set ChangeDetectionStrategy.OnPush on an Angular component?',
    answer: `
    Angular will only run change detection for that component when:
    - An @Input() property changes by reference
    - A reactive source (signal, observable, async pipe) emits

    Why?
    - Skips unnecessary checks
    - Improves performance for large apps
    `,
    category: 'Angular',
  },
  {
    question:
      'How would you unit test a component that has a service injected and calls one of its methods during ngOnInit()?',
    answer: `
    Steps:
    - Create a mock service (Jasmine spyObj, jest.fn, or plain object with spies)
    - Provide the mock in TestBed.configureTestingModule → providers: [...]
    - Create the component with TestBed.createComponent()
    - Call fixture.detectChanges() to trigger ngOnInit()
    - Assert the service method was called (and with correct args if needed)

    For Observables:
    - Mock method to return of(mockData)
    - Use async pipe or fakeAsync + tick() to flush values
   `,
    category: 'Angular',
  },
  {
    question:
      'What is the difference between RxJS mergeMap, concatMap and switchMap?',
    answer: `
    switchMap
    - Cancels previous inner observable when a new value comes
    - Use when only latest result matters (e.g. search typing)

    mergeMap
    - Runs all inner observables in parallel
    - Use when order doesn’t matter (e.g. bulk requests)

    concatMap
    - Runs inner observables sequentially in order
    - Use when order matters (e.g. multi-step form submits)
    `,
    category: 'Angular',
  },
  {
    question: 'What are Angular decorators, and how do they work?',
    answer: `
    Decorators are TypeScript functions that attach metadata to classes, properties, methods, or parameters. 
    They let Angular know how to compile and inject these elements.

    Types:
    - Class decorators → @Component, @Directive, @NgModule
    - Property decorators → @Input, @Output
    - Method decorators → @HostListener, @HostBinding
    - Parameter decorators → @Inject

    How it works:
    - Angular uses Reflect Metadata API to read stored metadata
    - Example: @Injectable() makes a service available for DI
    - Example: @HostListener('document:click') closes a dropdown on outside click
    `,
    category: 'Angular',
  },
  {
    question:
      'What are Signals in Angular, and how do they compare to Observables or traditional Change Detection?',
    answer: `
    Signals are Angular 16+ reactive primitives for managing state. 
    They store a value, track dependencies, and trigger re-renders only where needed.

    Benefits:
    - Fine-grained reactivity → only affected DOM updates
    - Better performance → no reliance on Zone.js
    - Simpler → values behave like variables with reactivity built-in
    - Helpers: computed() for derived values, effect() for side effects

    Comparison:
    - vs Observables → Observables handle async streams, Signals are best for local UI state
    - vs Change Detection → Signals update DOM directly without full tree checks
    `,
    category: 'Angular',
  },
  {
    question: 'What is SignalStore in Angular?',
    answer: `
    SignalStore (Angular 17+) is a lightweight, reactive state management solution built on Signals.  
    It’s simpler than NgRx and avoids boilerplate (no actions, reducers, selectors).

    Core features:
    - signal() → store state
    - computed() → derive state
    - effect() → react to changes
    - updater() → update state (like reducers)

    Example:
    @Injectable()
    export class CounterStore extends signalStore({ state: { count: 0 } }) {
      readonly double = this.computed(() => this.state().count * 2);
      increment = this.updater(s => ({ ...s, count: s.count + 1 }));
    }

    Use when NgRx would be overkill, but you still want reactive, type-safe state.
    `,
    category: 'Angular',
  },
  {
    question: 'What is Angular lifecycle and what are lifecycle hooks?',
    answer: `
    Lifecycle = steps Angular runs when creating, rendering, checking, and destroying a component.  
    Hooks = methods you implement to run logic at those stages.

    Order during init:
    1. constructor → class created
    2. ngOnChanges → input properties changed
    3. ngOnInit → runs once (good for initial data fetch)
    4. ngDoCheck → custom change detection
    5. ngAfterContentInit/Checked → content projection ready/checked
    6. ngAfterViewInit/Checked → view + child views ready/checked
    7. afterNextRender (Angular 18+) → after first render
    8. afterEveryRender → after every render cycle

    On destroy:
    - ngOnDestroy → cleanup (subscriptions, timers, etc.)

    Common use cases:
    - ngOnInit → fetch data
    - ngAfterViewInit → access @ViewChild DOM elements
    - ngOnDestroy → unsubscribe/cleanup
    `,
    category: 'Angular',
  },
  {
    question: 'Angular forms - what are the options?',
    answer: `
    Template-Driven Forms
    - Define structure in template with ngModel
    - Good for simple forms and two-way binding
    - Harder to test and scale

    Reactive Forms
    - Define structure in class with FormGroup/FormControl/FormBuilder
    - Programmatic, synchronous, type-safe
    - Easy to test and validate, good for dynamic forms
    - More verbose and imperative

    Signal-Based Forms (Angular 20+)
    - Based on Signals, builder API (createFormGroup, FormControl)
    - Declarative, reactive, integrated with Signals ecosystem
    - Fine-grained reactivity, less boilerplate
    `,
    category: 'Angular',
  },
  {
    question:
      'What are the most common tests in Angular? What are the best testing practices?',
    answer: `
    Types of tests:
    - Unit tests → isolate components, services, pipes
    - Integration tests → verify how pieces work together
    - End-to-end tests → simulate user perspective

    Best practices:
    - Test behavior, not implementation
    - Keep unit tests fast and isolated (use mocks)
    - Don’t test Angular or 3rd party libs, only your code
    - Write meaningful names and assertions
    - Mock external dependencies (APIs, services)
    `,
    category: 'Angular',
  },
  {
    question: 'What are Promises, Observables and Subjects?',
    answer: `
    Promise
    - One async value (resolve or reject)
    - Eager, starts immediately
    - One-time only
    - Chain with .then/.catch

    Observable
    - Stream of multiple values over time
    - Lazy, starts when subscribed
    - Can be cancelled (unsubscribe)
    - Has operators (map, filter, switchMap)

    Subject
    - Both Observable and Observer
    - Can emit values manually (next)
    - Multicasts to many subscribers
    - Types:
      • Subject (basic)
      • BehaviorSubject (holds current value)
      • ReplaySubject (replays past values)
      • AsyncSubject (emits last value on complete)
    `,
    category: 'Angular',
  },
  {
    question:
      'What are Resolvers and Interceptors in Angular? How do they differ?',
    answer: `
    Resolver
    - Runs before a route is activated
    - Pre-fetches data, available via ActivatedRoute.data
    - Configured in route (resolve key)
    - Use case: load profile/article before rendering

    Interceptor
    - Runs before/after every HTTP request/response
    - Configured globally in HTTP layer
    - Use case: add auth headers, log, handle errors, show spinners

    Difference:
    - Resolver → route-level data fetching
    - Interceptor → global HTTP modification
    `,
    category: 'Angular',
  },
  {
    question:
      'If a service is providedIn: root, but also added to a standalone component providers, what happens?',
    answer: `
    - Angular creates a new instance scoped to that component
    - It does NOT reuse the root singleton
    - This instance is destroyed when the component is destroyed
    - Unless: other components in the same injector tree still use it
    `,
    category: 'Angular',
  },
  {
    question: 'What is @defer in Angular?',
    answer: `
    @defer = block syntax for lazy-loading parts of UI only when needed

    Usage:
    - Delays rendering until a condition or trigger occurs
    - Improves performance in large apps
    - Syntax:
      @defer { ... }
      @placeholder { ... }
      @loading { ... }
      @error { ... }

    Example:
    - @defer (on idle) { <expensive-widget /> }
    `,
    category: 'Angular',
  },
  {
    question:
      'What is content projection in Angular? Can we project multiple things?',
    answer: `
    Content Projection
    - Lets parent content be inserted into a child component template
    - Uses <ng-content>, similar to Web Components slots
    - Multiple slots possible using select=""

    Example:
    <header><ng-content select="[title]"></ng-content></header>
    <section><ng-content select="[body]"></ng-content></section>

    Usage:
    <h1 title>My title</h1>
    <p body>My body</p>
    `,
    category: 'Angular',
  },
  {
    question:
      'What is the difference between ng-container and ng-template in Angular?',
    answer: `
    ng-container
    - Invisible wrapper, groups elements
    - Adds no extra DOM
    Example:
    <ng-container *ngIf="isLoggedIn">
      <h1>Welcome!</h1>
    </ng-container>

    ng-template
    - Defines a reusable template, not rendered until used
    - Needs *ngTemplateOutlet or a structural directive
    Example:
    <ng-template #loading><p>Loading...</p></ng-template>
    <ng-container *ngTemplateOutlet="loading"></ng-container>
    `,
    category: 'Angular',
  },
  {
    question:
      'What happens to a Promise/Observable/Subject when triggered by a component and the component is destroyed?',
    answer: `
    Promise
    - Cannot be cancelled
    - Still resolves/rejects even if component is destroyed
    - May cause errors if result updates destroyed component

    Observable
    - Can be cancelled by unsubscribe
    - If not unsubscribed, emissions continue → possible leaks

    Subject
    - Keeps emitting until unsubscribed
    - If component is destroyed without unsubscribe, emissions still arrive → memory leaks
    `,
    category: 'Angular',
  },
  {
    question: 'What are common RxJS operators and what do they do?',
    answer: `
    Creation
    - of(...values) → from static values
    - from(array|promise) → from iterable or promise

    Transformation
    - map → transform values
    - switchMap → cancel prev, only latest
    - mergeMap → parallel
    - concatMap → sequential
    - exhaustMap → ignore new until current done

    Filtering
    - filter → pass values by condition
    - take(n) → first n values then complete
    - takeUntil(obs$) → complete when other emits
    - debounceTime(ms) → wait before emitting
    - distinctUntilChanged → skip duplicates

    Combination
    - combineLatest → latest values from all
    - forkJoin → wait for all complete, then emit once
    - withLatestFrom → combine with latest from another
    - zip → emit in lockstep

    Error handling
    - catchError → handle errors
    - retry(n) → retry n times on error

    Utility
    - tap → side effects
    - finalize → run on complete/error
    - delay(ms) → delay emissions
    `,
    category: 'Angular',
  },
  {
    question:
      'You have a search field above a data table. Every key press triggers API calls. How do you fix it?',
    answer: `
    Use RxJS operators on valueChanges:

    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(value => this.backendService.search(value))
    ).subscribe(results => this.tableData = results);

    - debounceTime(300) → wait 300ms pause
    - distinctUntilChanged() → skip duplicates
    - switchMap() → cancel old requests, only latest matters

    Extra UX:
    - add loading spinner
    - handle empty strings
    - for large apps → cache results, paginate, throttle scroll
    `,
    category: 'Angular',
  },
  {
    question:
      'How to prevent multiple login API calls when user clicks button many times?',
    answer: `
    UI guard:
    - Disable login button while request is pending
    - Show loading spinner
    - Use a flag to block extra clicks

    RxJS solution:
    - Use exhaustMap() → first click triggers call
    - While request is pending, ignore all other clicks
    `,
    category: 'Angular',
  },
  {
    question:
      'How would you handle a situation where the user keeps triggering data creation, causing multiple heavy backend requests?',
    answer: `
    Debounce input
    - Use debounceTime for valueChanges or debounce function for events
    - Avoid firing on every keystroke

    Disable while pending
    - Disable form/button while request is in flight
    - Show spinner/feedback to user

    Extra UX
    - Confirmation dialogs before expensive ops
    - Auto-save + explicit Save button
    `,
    category: 'Angular',
  },
  {
    question: 'What are Angular PWAs?',
    answer: `
    Progressive Web App = Angular app with native-like behavior

    Key features:
    - Offline support (service worker caching)
    - Installable on devices
    - Fast loading (cached assets)
    - Optional push notifications
    - Must be served via HTTPS
    `,
    category: 'Angular',
  },
  {
    question: 'What are Resolvers in Angular? Why not fetch in ngOnInit?',
    answer: `
    Resolver
    - Fetches data before route activates
    - Component loads with ready data, no blank screen

    Flow:
    1. Resolver fetches data
    2. Route activates
    3. Component uses ActivatedRoute.data

    Benefits:
    - Prevents empty UI/loading spinners
    - Errors handled before view loads
    - Better UX
    `,
    category: 'Angular',
  },
  {
    question: 'What is Webpack? What are Tree Shaking and Dependency Graph?',
    answer: `
    Webpack
    - Module bundler: collects JS + assets into bundles for browser

    Dependency Graph
    - Map of all modules + imports
    - Built from entry point, follows all imports

    Tree Shaking
    - Removes unused exports from bundle
    - Works with ES modules (static imports/exports)
    - Not reliable with CommonJS (dynamic require)
    `,
    category: 'Programming',
  },
];

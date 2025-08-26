import { FlashcardData } from '../../models/flashcard-data';

export const FLASHCARDS_ANGULAR: FlashcardData[] = [
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
    Services, tokens, categorys are injected instead of being hardcoded. This promotes testability and separation of concerns.
    2. Observer Pattern
    Used in RxJS and component communication. Observables notify subscribers when data changes.
    3. category Pattern
    Ngcategorys and standalone components encapsulate functionality and scope.
    4. Facade Pattern
    Common in state management (e.g. AuthFacade) to hide complexity of dependencies (e.g. NgRx, SignalStore) behind a clean API.
    5. Strategy Pattern
    Used when injecting different behaviors (e.g. different auth strategies). Can be implemented via interfaces + DI.
    6. Singleton Pattern
    Angular Services provided in root or specific categorys are singletos.
    7. Template Pattern
    HTML templates define UI structure, with dynamic binding logic behind the scenes.
    `,
    category: 'Angular',
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
    Load feature categorys oly when needed via Angular Router.

    Standalone Component
    Reduce complexity and eliminate unnecessary categorys.

    Bundle Size Optimizationns
    Use ng build --prod (or --configuration production) to enable: Tree shaking, minification, AOT Compilation. You can also use CLI's built-in source map analyzer to detect heavy libraries.

    Code Splitting & Preloading
    You can split routes smartly and preload critical ones with PreloadAllcategorys, avoid putting everything in Appcategory.

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
    In the test setup (TestBed.configureTestingcategory) I'd provide this mock in place of the real service using the providers array.
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
    question: 'What are Angular decorators, and how do they work?',
    answer: `
    Decorators in Angular are TypeScript functions that attach metadata to classes, methods, properties or parameters. They allow Angular's compiler and DI system to understand how to construct and use these elements at runtime.
    1. Class decorators (Component, Directive, category) - define what the class represents and how Angular should treat it.
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
  },{
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
  },  {
    question:
      'If we have in Angular service provided in root, but we add it to the providers array of standalone component - will it be the same instance as globally or a new one? Will it survive if the component gets destroyed?',
    answer: `
    Angular will create a new instance of the service scoped to the component. It will not reuse the global singleton from the root injector.
    Furthermore, this new instance will be destroyed when the component is destroyed, unless other components in the same injector tree are still using it.
    `,

    category: 'Angular',
  }, {
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
  },  {
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
  },{
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
  },{
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
  },  {
    question:
      'What is Webpack? What is it for? Tree Shaking? Dependency Graph?',
    answer: `
    Webpack is a category bundler. It takes multiple JavaScript files (and other assets) and bundles them into optimized files that browsers can understand. It starts from defined entry points, builds a dependency graph, handles imports/exports, and applies various optimizations.

    The dependency graph is the structure Webpack builds by analyzing all categorys and their imports. Starting from the entry point, it follows every import, forming a graph-like (tree-like) structure of the entire application. This graph allows Webpack to determine which categorys are needed and how they are connected.

    One important optimization is tree shaking. Tree shaking removes unused exports from the final bundle. It only works with ES categorys (ESM) because their imports/exports are static — meaning Webpack can know exactly what is imported at build time. CommonJS (require) is dynamic (require() is a runtime function call), so Webpack cannot reliably detect unused code in that format.
    `,
    category: 'Programming',
  },
];

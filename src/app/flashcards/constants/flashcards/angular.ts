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
    question: 'How would you avhieve a parent-child component communication?',
    answer: `
    Using input, output or shared service with a Subject or signal for communication.

    Custom two-way binding
    When the child component has an input and an output with the same property name, but the output uses the Change suffix. This enables banana-in-a-box binding in the template. When the child emits a value it directly updates the parent property.
    export class ChildComponent {
      num = input<number>(0);
      numChange = output<number>();

      onNumChange(newNum: number) {
        this.numChange.emit(newNum);
      }
    }
    @Component({
      imports: [ChildComponent],
      template: '<app-child [(num)]="num" />',
    })
    export class ParentComponent {
      num = signal(0);
    }

    Model inputs
    That's the sytatic sugar over manual two-way binding. Instead of defining input and output and emitting manually you can use model(). It works both with signals and non signal properties passed. It is commonly used within custom form properties.
    @Component({
      ...
      template: '<input [(ngModel)]=num" />'
    })
    export class ChildComponent {
      num = model<number>(0);
    }
    @Component({
      imports: [ChildComponent],
      template: '<app-child [(num)]="num" />'
    })
    export class ParentComponent {
      num = signal(0);
    }

    Control Value Accessor (CVA)
    Perfect when the child component acts as a custom form control. Implementing ControlValueAccessor allows the component to integrate with Angular's forms APIs (both, reactive and template-driven).
    Most people use it for creating resuable component in a UI library or when the child is for example custom serch and select component.
    Imagine searching for goods in some shop webapp - when you type an item prefix it makes an API call, and then we have a dropdown of possible options.
    `,
    category: 'Angular',
  },
  {
    question:
      'What is NgZone in Angular and when to go out of Angular change detection?',
    answer: `
    NgZone
    It's a wrapper around JS event loop. It allows Angular to know when to trigger change detection. Angular patches async operations (like setTimeout, Promise etc.) using zone.js, so when those operations complete, change detection is runned automatically. It can lead to performance issues with high frequency code (e.g. scroll). In those cases we should NgZone.runOutsideAngular and manually re-enter with NgZone.run().
    Good example might be simple user event tracker where there are global listeners on user events. They do not impact UI bindings, and the code runs in the background, therefore we should run it outside of change detection system. Another examples would be integrating with analytics, tracking or scripts that are passive (3rd party).
    `,
    category: 'Angular',
  },
  {
    question: 'What are Injection Tokens and why we use them?',
    answer: `
    Injection token
    Is like a unique identifier or a name tag that Angular uses to locate and provide a specific value or service during dependency injection.
    We usually use new InjectionToken when we provide a value that isn't a class (configuration objects, primitive values, interface-based dependency).

    Example:
    Running initialization logic at the app startup using the APP_INITIALIZER injection token token. While APP_INITIALIZER is  now depracated, recommended replacement is the provideAppInitializer function.
    bootstrapApplication(App, {
    providers: [
      provideAppInitializer(() => {
        // init languages
        // get data from cookies
        // setup sentry
        // etc ...
      }),
    ],
    });

    We can also define custom injection tokens, commonly used when developing Angular libraries that require configuration from the consuming app. For instance, if your library calls API and needs to know which environment it should call - we can provide this value through a token:
    // code in the library 
    export const API_ENDPOINT = new InjectionToken<string>('API_ENDPOINT');
    // in a different application/library
    bootstrapApplication(AppComponent, {
      providers: [
        {
          provide: API_ENDPOINT ,
          useValue: '/prod/api'
        },
      ]
    }
    `,
    category: 'Angular',
  },
  {
    question: 'What are resultion modifiers and why we use them?',
    answer: `
    Resolution Modifier
    When injecting a service, Angular allows you to configure up to four resolution modifiers via the second argument to the inject() function. We rarely use them in day-to-day development, they tend to become important for building libraries or advanced directives (however, Angular itself uses them a lot and looking at its source code can clear things out a little).
    private service = inject(SomeService, {
      host: true,
      optional: true,
      self: true,
      skipSelf: true
    });

    Optional()
    We use it when provided service/injection token may or may not be provided by the developer (e.g. APP_INITIALIZER injection token). Angular during injection of this token uses inject(APP_INITIALIZER, {optional: true}), since developer can, but don't have to provide some exectuable code when angular initiates.

    Self()
    It makes Angular resolve the dependency only from the current injector (it won't check parent injectors). We use that mostly in directives that shoul donly operate on the element they're attachted to (e.g. adding an asterisk to input fields that are required). Use self when injecting NgControl, so it only pulls from the target element (angular uses self() internally in ReactiveFormsModule or FormsModule to resolve sync and async validators used on the form).
    @Directive({
      selector: 'input[formControlName], input[formControl]'
    })
    export class RequiredMarkerDirective {
      private ngControl = inject(NgControl, {
        optional: true,
        self: true
      })
      constructor() {
        if (this.ngControl?.control?.hasValidator(Validators.required)) {
        // Add red asterisk
        }
      }
    }

    SkipSelf()
    Opposite of self - it tells Angular to skip the current injector and look in the parent. We use that when a directive or component needs to interact with a container element, like a parent form. Example would be using FormControlName on reactive forms it tries to resolve the parent form name for the control.
    @Directive({
      selector: '[formControlName]',
      providers: [controlNameBinding],
      standalone: false,
    })
    export class FormControlName extends NgControl implements OnChanges, OnDestroy {
      constructor(
        @Optional() @Host() @SkipSelf() parent: ControlContainer,
        // ... other injectors
      )
    }

    @Host
    It limits resolution to the host component or directive. It prevents Angular from searching up the hierarchy. Example would be if a directive inside FinalComponent tries to inject FormGroupDirective using @Host(). Angular will only look inside FinalComponent, not any parent components that may contain the actual form.
    @Directive({
      selector: '[appHostFormDirective]',
    })
    export class HostFormDirective {
      private formGroup = inject(FormGroupDirective, { host: true })
      
      constructor() {
          console.log('FormGroupDirective found:', formGroup);
      }
    }
    @Component({
      selector: 'app-final',
      template: '
        <form [formGroup]="form">
          <input [formControlName]="'name'" appHostFormDirective />
        </form>
      ',
      imports: [ReactiveFormsModule, HostFormDirective],
    })
    export class FinalComponent {
      form = new FormGroup({
        name: new FormControl<string | null>(null),
      });
    }
    `,
    category: 'Angular',
  },
  {
    question: 'What is and why we use track function in a for loop?',
    answer: `
    Track function
    It is a performance optimization that was overlooked in the past, but new it is required to specify it in new control flow @for.

    Why is it here?
    Imagine having component making an API call to fetch a list of items and users and display them in the template. We can also have button which refetches this data (reload). With the old syntax (without track) we on every refetch triggered by button clicked, the array with data would be updated (even with the same content) and that would cause Angular to re-render all elements in the DOM. That's because it can't tell which items changed. We loose performance and have UI flickering, expecially for long and complex data lists. To prevent it we can use trackBy function and for example add function to handle identification:
    identify(index: number, item: { id: string }): string | number {
      return item.id;
    }
    That would tell Angular how to identify unique items in the array and how to associate each of them with corresponding DOM element (on data reload Angular will compare these keys and allow items that did not change to be preserved in the DOM).

    Why is it important?
    DOM operations are expensive, without proper tracking Angular will discard and recreate DOM elements for every item, even when the data was not changed.

    Common mistakes with new syntax:
    - using object itself as the key (;track item), because the reference to each item changes on every reload (even for identical data)
    - using $index as the key (;track $index), it causes problems when the item is deleted
    `,
    category: 'Angular',
  },
  {
    question: 'What is the difference between providers and viewProviders?',
    answer: `
    providers
    The service is available to the component itself, its template, any child components, and even to the content projected into it using <ng-content>.

    viewProviders
    Service visibility is limited to the component's view. That means it's accessible only to the component and the elements declared directly in its template, but not to projected content or external child components.

    Both of those are rearely used, mostly in NgRX examples and generation of dynamic components with configurable dependencies.

    Example:
    Flight booking portal, final payment step you present to options to pay - Stripe as default and PayPal. User has ability to choose, each option has different implementation, both rely on a common PaymentService abstraction:
    export abstract class PaymentService {
      abstract pay(): void;
    }

    @Injectable()
    export class StripeService implements PaymentService {
      pay() { console.log('Paid with Stripe!'); }
    }

    @Injectable()
    export class PaypalService implements PaymentService {
      pay() { console.log('Paid with PayPal!'); }
    }

    @Component({
      selector: 'app-payment-button',
      template: '<button (click)="handlePayment()">Pay</button>',
    })
    export class PaymentButtonComponent {
      private paymentService = inject(PaymentService);

      handlePayment() {
        this.paymentService.pay();
      }
    }
    In the real life we would need to establish connection with payment provider, handle errors etc. The PaymentButtonComponent is using abstract PaymentService, which means, we need to provide an instance of either the Paypal or Stripe service.We can manually create and inject the appropriate provider to dynamically decide which implementation to use based on user selection. Demonstration of destorying and re-instantiating the component with different PaymentService provider each time:
    @Component({
      imports: [FormsModule],
      template: ' 
        <label>
          <input type="checkbox" [(ngModel)]="usePaypal" /> Use PayPal
        </label>

        <ng-template #container />
      '
    })
    export class TestComponent {
      readonly usePaypal = signal(false);

      readonly container = viewChild('container', {
        read: ViewContainerRef
      });

      constructor() {
        // init payment button
        effect(() => {
          const container = this.container();
          const usePaypal = this.usePaypal();

          untracked(() => {
            if (container) {
              this.loadComponent(container, usePaypal);
            }
          });
        });
      }

      loadComponent(vcr: ViewContainerRef, usePaypal: boolean) {
        // remove previous
        vcr.clear();

        const injector = Injector.create({
          providers: [
            {
              provide: PaymentService,
              useClass: usePaypal ? PaypalService : StripeService
            }
          ]
        });

        // attach component to DOM
        vcr.createComponent(PaymentButtonComponent, { injector });
      }
    }
    This exaples shows how providers can be dynamically configured depending on runtime logic. We don't use providedIn: 'root' here, even if our services were globally provided, because using Injector.create() always results in new instances, overriding any singleton behavior.
    `,
    category: 'Angular',
  },
  {
    question:
      'Why pipes are save in a template, but function calls (not signals) are not?',
    answer: `
    Pure pipes
    They are only reevaluated when their input values change, which makes them efficient and safe to use in templates. 

    Function calls
    In templates they are executed on every change detection cycle.

    Under the hood, pipes create a caching object, and for a specific input, they perform the pipe's logic and store the result in the cache. Then when change detection runs again with the same input, the pipe first checks the cache. If the output was already compute it simplly returns the cached value, making it an O(1) operation.
    `,
    category: 'Angular',
  },
  {
    question:
      'How would you convice team to migrate from Observables to signals?',
    answer: `
    I would simply tell the truth:
    - angular, and the whole frontend is clearly moving towards signals
    - there's even a TC39 proposal to support signals natively in JS
    - most of Angular new APIs (e.g. ResourceAPI) are designed to work with signals
    - signals simplify state management (they can both listen to changes and synchronously read their current value)
    `,
    category: 'Angular',
  },
  {
    question:
      'What is the diamond problem in Observbables and why there is none with signals?',
    answer: `
    Example focusing on cobineLatest operator:
    We have effect that listens to two signals. Singals are synchronous and batched, meanging that if both signals are updated one after another, the effect will still run only once. However if we use combineLatest, it emits every time a dependency changes, resulting in multiple emissions even for the same update cycle.
    export class TestComponent {
      prop1 = signal('a');
      prop2 = signal('b');

      constructor() {
        effect(() => {
          const prop1 = this.prop1();
          const prop2 = this.prop2();

          console.log(\`Signal: \${prop1} - \${prop2}\`);
        });

        combineLatest([
          toObservable(this.prop1), 
          toObservable(this.prop2)]
        ).subscribe(([p1, p2]) => console.log(\`Observable: \${[p1} - \${p2}\`));
        
        setTimeout(() => {
          this.prop1.set('one');
          this.prop2.set('two');
        }, 1000);
      }
    We would see:
    Signal: a - b
    Observable: a - b
    Signal: one - two
    Observable: one - b
    Observable: one - two
    In the console output we see:
    - the effect logs only once, after both values are updated
    - the combineLatest logs twice, once for each individual update

    This is example of the diamond problem - duplicated or excessive emissions due to shared dependencies in a reactive graph. Signals avoid this problem thanks to their synchronous and batched behavior.
    `,
    category: 'Angular',
  },
  {
    question: 'When to use effect and untracked in a signal based application?',
    answer: `
    Effects
    Use them whan we have no other alternative, e.g. when we need to rely on a reactive value and the other end isn't reactive (DOM API synchronizations, sending data into analytics, communication with a non-reactive library).

    Untracked
    This function is needed when we want to remove dependency tracking in an effect. Problems that occur many times are that an effect reading multiple singals and also modifying some, therefore it creates an infinite cycle and is running all the time. We can use untracked most of the time and leave only the dependency signals outside of it.
    Example:
    Let's focus on the input element when the button is clicked. Use afterRenderEffect which works similarly as effect, with key difference being that it runs after the application has completed rendering.
    @Component({
      selector: 'app-focus-example',
      imports: [FormsModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: \`
        <button (click)="editMode.set(!editMode())">
          {{ editMode() ? 'Exit' : 'Enter' }} Edit Mode
        </button>

      <input #editInput [(ngModel)]="value" [disabled]="!editMode()" />
      \`
    })
    export class FocusExampleComponent {
      editMode = signal(false);
      value = signal('Initial value');
      editInput = viewChild('editInput', { read: ElementRef });

      constructor() {
        afterRenderEffect(() => {
          const editMode = this.editMode();
        
          untracked(() => {
            if (editMode ) {
              // read the element reference once, without tracking it
              const inputRef = this.editInput();
              // defer the focus() until after the DOM is updated
              setTimeout(() => {
                inputRef?.nativeElement?.focus();
              })
            }
          })
        });
      }
    }
    `,
    category: 'Angular',
  },
  {
    question: 'Do we need life-cycle hooks in a fully signal based app?',
    answer: `
    Many of life-cycle hooks can be replaced by signals and reactive primitives.

    NgOnInit (NO)
    Mostly replaceable with constructor or effect. This hook is traditionally used for init logic that depends on resolved inputs, data fetching, or setting up observers. For simpler logic, constructor is enough, while more complex reactive scenarios are better handled with effect().

    NgOnChange (NO)
    It can be replaced with computed or effect, as these can react to changes in input signal dependencies.

    NgAfterViewInit (NO)
    It can be replaced with effect to perform updates on DOM elements, using viewChild signal references as dependencies.

    NgAfterContentInit (NO)
    Similar to AfterViewInit, effect can handle init of logic based on contentChild signal references or we can use the afterNextRender callback.

    NgAfterContentChecked/NgAfterViewChecked (NO)
    They are called after every change detection cycle, so they are performance sensitive. We can replace them with afterRenderEffect wich runs after the view has been rendered and a signal dependency changed.

    NgOnDestroy (NO)
    For cleanup tasks such as unsubscribing from 3rd party libraries, clearing intervals, or other manual teardown logic that signnals don't automatically handle we can use inject DestroyRef and liston on onDestroy for this purpose.

    `,
    category: 'Angular',
  },
  // {
  //   question: '',
  //   answer: ``,
  //   category: 'Angular'
  // }
];

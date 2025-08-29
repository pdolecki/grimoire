import { FlashcardData } from '../../models/flashcard-data';

export const FLASHCARDS_JAVASCRIPT: FlashcardData[] = [
  {
    question: 'What is hoisting in JavaScript?',
    answer: `
    Hosting in JS means that variable and function declarations (not initializations) are moved to the top of their scope during compilation phase (before execution).

    var
    Hoisted, initialized with undefined, can be referenced before declaration.

    let, const
    Hoisted, placed in Temporal Dead Zone, referencing before declaration trows a ReferenceError.

    function declaration
    Fully hoisted, can be called before their definition.

    function expression
    Treated like variables, only name is hoisted, calling them early results in TypeError.
    `,
    category: 'JavaScript',
  },
  {
    question: 'What is closure in JavaScript',
    answer: `
    Closure
    Is when a function captures variables from its outer scope and keeps access to them even after the outer function has returned.
    It is caused by JS functions forming a lexical closure - capture and retain access to their surrounding scope at the time of definition.

    What do we use it for?
    - private state (counters, configs, caches)
    - event handlers (to remember a context)
    - memoization utilities (reusing past values of functions for speed)

    Angular
    We use Closures for creating private variables in services, building factory functions, managing callback state.
    `,
    category: 'JavaScript',
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
    question: 'What is Dead Code in JavaScript? How to remove it?',
    answer: `
    Dead Code
    It is a code, that either never exectues, is never referenced or which result is unused. 
    We need to reduce it to achieve smaller bundles and cleaner code that is easier in maintanance.

    How to remove it?
    - use ES modules and named imports (enables tree-shaking)
    - avoid exporting everything (CommonJS and barrel files)
    - reduce work at import time (keep modules side-effect free)
    - prefer small, pure functions, split code with dynamic imports, lazy load routes

    Angular
    - leverage build configurations (removes the dead code)
    - tree-shakable providers (can be dropped if unused)
    - lazy-load standalone routes/components (unused features never ship)
    - avoid side effects in services/modules (optimizer can eliminate them)
    `,
    category: 'JavaScript',
  }, {
    question: 'How to build high-performance JavaScript app?',
    answer: `
    Measure and Keep Track
    Use DevTools profiler, Web Vitals, watch for long tasks.

    Ship less JS
    Split code, use dynamic imports, lazy load routes, avoid side-effects, enable tree shaking.

    Free the main thread
    Use Web Workers for heavy CPU tasks, requestAnimationFrame for animations.

    Create engine-friendly code
    Define objects shapes at starts, batch DOM operations (reads/writes).

    Handle async code
    Async/await and AbortController for cancelling. Debounce/Throttle frequent events like scroll, resize, input.

    Angular
    Singals, OnPush, Zoneless, @for with track, @defer for less important UI, lazy load routes and feature components.
    `,
    category: 'JavaScript',
  },
];

import { FlashcardData } from '../../models/flashcard-data';

export const FLASHCARDS_MARKUP: FlashcardData[] = [
  {
    question: 'What is a difference between <div> and <span> in HTML?',
    answer: `
    <div>
    - block level element (starts on a new line)
    - used to group larger sections or blocks of content

    <span>
    - inline element (flows within thext)
    - used to style or group small pieces of text without breaking layout
    `,
    category: 'Markup',
  },
  {
    question: 'How can you center content inside a <div>?',
    answer: `
    Block centering (horizontal only):
    maring: 0 auto;

    Flexbox:
    display: flex;
    justify-content: center;  // horizontal
    align-items: center;  // vertical

    Grid:
    display: grid;
    place-items: center;

    Text aligment (inline elements):
    text-align: center; // works for inline elements

    Absolute:
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    `,
    category: 'Markup',
  },
  {
    question: 'What do we gain from using SCSS?',
    answer: `
    Variables
    Reusables values for colors, fonts, spacing, etc.
    Example: 
    $primary: #333 -> color: $primary

    Nesting
    Cleaner, more structured selectors that mirror the HTML.

    Mixins and Functions
    Reusable style logic without duplication.
    Example:
    @mixin flex-center { display: flex; justify-content: center; align-items: center }
    .card { @include flex-center; }

    Inheritance
    Share base styles across calsses using @extend.
    Example:
    %base-button { padding: 8px; border-radius: 4px; }
    .btn-primary { @extend %base-button; }
    `,
    category: 'Markup',
  },
  {
    question: 'What is the DOM?',
    answer: `
    Document Object Model
    It is a programming interface that represents an HTML or XML document as a tree of nodes (elements, attributes, text, etc.).
    When the browser loads HTML, it parses it into a DOM tree, where each tag becomes a node. This allows JavaScript to interact with the page:
    - read or modify content
    - change styles
    - handle events

    The DOM acts as the bridge between static markup and dynamic scripts.
    `,
    category: 'Markup',
  },
  {
    question: 'How to optimize frontend on low level?',
    answer: `
    Minimize Reflows & Repaints
    - Use requestAnimationFrame for animations (instead of setTimeout/setInterval)
    - Batch DOM reads/writes to avoid layout thrashing
    - Avoid triggering synchronous style recalculations (e.g., accessing offsetHeight before changing styles)

    Use Efficient Data Handling
    - Prefer Map/Set over arrays for large collections with frequent lookups
    - Debounce/throttle expensive events (scroll, resize, input)

    Prevent Memory Leaks
    - Always remove event listeners on unmount
    - Unsubscribe from Observables or Streams (Angular, RxJS)
    - Nullify references when objects are no longer needed

    Offload Heavy Work
    - Use Web Workers for CPU-heavy tasks (parsing JSON, sorting, data crunching)
    - Communicate via postMessage() efficiently (avoid sending huge objects directly)
    - Consider transferable objects (ArrayBuffer) for performance

    Lazy Loading
    - Use loading="lazy" for images and iframes
    - Apply route/component-level code splitting in Angular
    - Dynamically import heavy libraries only when needed
    `,
    category: 'Markup',
  },
  {
    question: 'What are the ways to connect JavaScript to HTML?',
    answer: `
    Inline (attributes on elements)
    Example: 
      <button onclick="alert('Hi')>Click</button>
    Conclusion: 
      Bad because Mixes HTML and JS, hard to maintain.

    Internal (script tag inside HTML file)
    Example: 
      <script>
        console.log('Hello');
      </script>
    Conclusion
      Good for demos or very small pages, but not scallable.

    External (separate JS file)
    Example:
      <script src="app.js"></script>
    Conclusion:
      Keeps code organized, resuable and maintainable.

    Script loading notes:
    - place script before </body> or use attributes
    - defer -> downloads in parallel, runs after HTML is parsed (safe, preservs order)
    - async -> donwloads in parallel, runs immediately when ready (may break order)
    - Best practice: <script src="app.js" defer></script> near </body>
  `,
    category: 'Markup',
  },
  {
    question: 'When should you use id vs class selectors in HTML/CSS?',
    answer: `
    ID Selectors (#id)
    - identify a single, unique element on the page
    - should be unsed only once per page
    - higher CSS specifity than classes
    - common in JS (document.getElementById)

    Class Selectors (.class)
    - apply styles/behavior to multiple elements
    - can be reused across elements (more flexible)
    - prferred for styling and reusable patterns

    Best Practices:
    - use classes for styling (scalable, reusable, easier to override)
    - use IDs only for unique purposes (anchors, JS hooks)
    - avoid using IDs for styling (complicate overrides due to specificity)
  `,
    category: 'Markup',
  },
  // {
  //   question: '',
  //   answer: ``,
  //   category: 'Markup'
  // }
];

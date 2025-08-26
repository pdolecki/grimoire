import { FlashcardData } from '../../models/flashcard-data';

export const FLASHCARDS_MARKUP: FlashcardData[] = [
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
    category: 'Markup',
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
    category: 'Markup',
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
    category: 'Markup',
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
    category: 'Markup',
  },{
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
    5. Lazy Load categorys, Images
    - loading="lazy" for images
    - Route-based code splitting in Angular
    `,
    category: 'Markup',
  }, {
    question: 'Ways of connecting JS to HTML?',
    answer: `
    There are three main ways to connect JavaScript to HTML:

    1) INLINE SCRIPTING
      - Using the "onclick", "onchange", etc. attributes directly on HTML elements.
      - Example: <button onclick="alert('Hello')">Click me</button>
      - Generally discouraged in modern development because it mixes structure and behavior.

    2) INTERNAL SCRIPT (in the same HTML file)
      - Adding a <script> block inside the HTML file.
      - Example:
        <script>
          console.log('Hello from inline script');
        </script>
      - Useful for quick demos, but not scalable for larger apps.

    3) EXTERNAL SCRIPT (recommended)
      - Linking a separate .js file using the <script src="..."></script> tag.
      - Example:
        <script src="app.js"></script>
      - Keeps code organized and maintainable.

    ADDITIONAL NOTES
    • <script> tags can be placed in <head> or at the bottom of <body>.
    • Adding the "defer" attribute loads scripts in parallel but executes them after the HTML is parsed.
    • Adding the "async" attribute loads scripts in parallel and executes them as soon as they finish, which may not preserve order.
    • Modern best practice: put <script src="..." defer></script> before </body> for predictable and efficient loading.
  `,
    category: 'Markup',
  },{
    question: 'What to use id or class selectors in HTML/CSS?',
    answer: `
    ID SELECTORS (#id)
    • Represent a single unique element on the page.
    • An ID should be used only once per page.
    • In CSS, IDs have higher specificity than classes.
    • In JavaScript, IDs are often used for direct element access (document.getElementById).
    • Example: <div id="header"></div> → #header { color: red; }

    CLASS SELECTORS (.class)
    • Represent one or more elements that share the same style or behavior.
    • Classes can be reused across multiple elements.
    • They are more flexible and maintainable than IDs for styling.
    • Example: <div class="card"></div> → .card { box-shadow: ...; }

    BEST PRACTICE
    • Use classes for styling and reusable patterns.
    • Reserve IDs for unique elements that require specific targeting (e.g., JavaScript hooks, internal page anchors).
    • Avoid overusing IDs in CSS because they increase specificity and can make overriding styles harder.
  `,
    category: 'Markup',
  },
];

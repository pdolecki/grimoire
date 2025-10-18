import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Article } from '../ui/article';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Article],
  template: `
    <app-article
      title="Angular Habits for Senior Developers"
      description="What should we consider if we to advance as a developers."
      [tags]="['Angular']"
    >
      <h2>1. Control Renders</h2>
      <p>
        When a single state change triggers large re-renders of DOM the UI
        becomes junky. Let's imagine it by using simple example, we operate on
        1000 items, single item update:
      </p>
      <h3>Bad example:</h3>
      <ul>
        <li>we use default input for items</li>
        <li>we use for loop without trackBy</li>
      </ul>
      <h3>Good example:</h3>
      <ul>
        <li>we use input marked as readonly</li>
        <li>we use for loop with trackBy function</li>
      </ul>
      <h3>What is the difference?</h3>
      <p>
        For the BAD scenario (for 1 item update), the full re-render takes about
        200ms, for the GOOD example however it goes down to about 15ms. This
        means that our perceived latency dropped by more than 90% for the UI
        path that we were working on.
      </p>

      <h2>2. Proper Observables Handling</h2>
      <p>
        I cannot stress enough, how important it is to leverage observables full
        potential. Many times developers use them, just because 'everyone' knows
        that they should, but without the proper understanding. The problem we
        are facing most often is nested subscriptions and manual unsubscribe -
        those two create memory leaks and hard to reason about lifecycle code.
      </p>
      <h3>Bad example:</h3>
      <p>
        We subscribe manually to our observables. This mostly happens in
        ngOnInit, we also update our local sources in there.
      </p>
      <h3>Good example:</h3>
      <p>
        We return observables from services, assign them at the declaration
        level and use async pipe in templates. We flatten streams with switchMap
        or mergeMap (so basically use rxjs as a whole).
      </p>
      <h3>What are the gains from that?</h3>
      <p>
        In BAD scenario retained subscriptions per route increased memory by
        about 10MB over session and required manual teardown (also making code
        reasoning harder, scaling even worse). In GOOD scenario however, the
        async pipe handles unsubscribing automatically, creating stable memory
        footprint and not requiring manual teardown. This effects in simpler
        lifecycle, cleaner code and fewer memory production regressions.
      </p>

      <h2>3. Lazy Loading and Intelligent Preloading</h2>
      <p>
        The problem that we are facing here is with large initial bundles. It
        causes our first meaningful paint delay and make poor time to interact.
      </p>
      <h3>The solution to our problem!</h3>
      <p>
        We convert large features to lazy loaded modules and apply a selective
        preloading strategy for routes that are needed immediately.
      </p>
      <h3>What would be the gains in some real products?</h3>
      <p>
        Before the lazy loading initial JS bundle for example project takes
        about 1.5MB gzipped. Time to interactive is about 2s. After lazy loading
        initial bundle goes down to 400KB gzipped and time to interactive to
        about 0.6s. This significantly betters first impression and lowers
        bounce rate for new users.
      </p>

      <h2>
        4. Pure Pipes and Computed Properties to fight heavy logic in templates.
      </h2>
      <p>
        Problem that we face more often than we would like to admit is that we
        introduce functions in templates. They execute on every change detection
        cycle, leading to excessive CPU work.
      </p>
      <h3>What can we do about that?</h3>
      <p>
        We simply replace inline functions with pure pipes or precomputed
        values.
      </p>
      <h3>Result of that small change?</h3>
      <p>
        BAD template function invokes thousands of times per interaction. GOOD
        pure pipe runs only when input changes. CPU cycles for common
        interactions fall sharply. We end up with smoother UI and deterministic
        render costs.
      </p>

      <h2>5. Virtual Scrolling</h2>
      <p>
        Rendering thousands of DOM nodes kills our frame rate and memory. We can
        simply replace full ngFor with CDK Virtual Scroll or custom
        virtualization. Let's reason in terms of dataset of 10k rows.
      </p>
      <h3>Any gains here?</h3>
      <p>
        Before switching to virtual scroll DOM nodes were 10k, our initial
        render took about 500ms, average frame drop under scroll. After that
        change our DOM nodes go down to 30, initial render to about 20ms and we
        get smooth 60fps scroll experience. This results in dramatic UX
        improvement for heavy lists and lower memory usage.
      </p>

      <h3>
        6. Strict Types, Small Interfaces, Single Responsibility Services.
      </h3>
      <p>
        Weak typing that we introduce allows runtime surprises and encourages
        passing props ad hoc. We can simply fix it by enabling TypeScript strict
        settings, preferring smaller interfaces and keeping services focused on
        only one responsibility.
      </p>
      <h2>What we gain?</h2>
      <p>
        Before our runtime errors surfaced as subtle bugs in production for
        malformed response shapes. After tsc catches shape mismatches at build
        time, effecting in fewer runtime checks and faster refactors. We gain
        faster onboarding and safer refactor windows.
      </p>

      <h2>Testing the Contracts - unit tests, component harnesses, fast CI.</h2>
      <p>
        Features land with regression because tests are shallow or absent. We
        can fix it by adding focused unit tests for services, component harness
        tests for UI behavior and run tests in pre-merge CI pipeline.
      </p>
      <h3>Results of keeping those things in mind?</h3>
      <p>
        In real world scenario, before changes regressions found on production
        hotfixes averaged 1 per week. After that test coverage increased from
        45% to 75%, regressions fell by 30%. We've got greater confidence,
        faster merges and fewer emergencies.
      </p>
    </app-article>
  `,
})
export class AngularHabitsForSeniorDevelopers {}

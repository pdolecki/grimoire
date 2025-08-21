import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroLogo } from './hero-logo';
import { Button } from '../../shared/ui/button';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeroLogo, Button],
  template: `
    <section class="hero" aria-labelledby="hero-title">
      <app-hero-logo id="hero-title" />
      <p class="caption">
        Your personal spellbook for mastering code. Review concepts, sharpen
        your skills, and turn knowledge into instinct.
      </p>
      <div class="cta">
        <app-button
          label="Study Flashcards"
          aria-label="Go to Flashcards"
          [href]="'flashcards'"
        />
        <app-button
          label="Read Articles"
          variant="secondary"
          aria-label="Go to Articles"
          [href]="'articles'"
        />
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: var(--sz-30);
        text-align: center;

        .caption {
          max-width: 900px;
          font-size: var(--sz-26);
          color: var(--cl-light-06);
          margin-top: 0;
        }

        .cta {
          display: flex;
          gap: var(--sz-40);
        }

        @media (max-width: 768px) {
          .cta {
            flex-direction: column;
            align-items: center;
          }
        }
      }
    `,
  ],
})
export class Hero {}

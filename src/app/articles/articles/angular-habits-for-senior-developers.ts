import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Article} from '../ui/article';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Article],
  template: `
  <app-article
    title="Angular Habits for Senior Developers"
    description="What should we consider if we to advance as a developers."
    tag="'Angular'"
  >
    <h2></h2>
  </app-article>
  `
})
export class AngularHabitsForSeniorDevelopers {
}

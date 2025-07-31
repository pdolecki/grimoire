import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from './hero/hero';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Hero],
  template: ` <app-hero></app-hero> `,
  styles: `
  `,
})
export default class Home {}

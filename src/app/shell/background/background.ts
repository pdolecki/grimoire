import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BackgroundGradient } from './background-gradient';
import { BackgroundParticles } from './background-particles';
import { BackgroundStreams } from './background-streams';
import { BackgroundOrbs } from './background-orbs';

@Component({
  selector: 'app-background',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    BackgroundGradient,
    BackgroundParticles,
    BackgroundStreams,
    BackgroundOrbs,
  ],
  template: `
    <app-background-gradient></app-background-gradient>
    <app-background-orbs></app-background-orbs>
    <app-background-particles></app-background-particles>
    <app-background-streams></app-background-streams>
  `,
  styles: [],
})
export class Background {}

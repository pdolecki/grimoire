import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <div class="home">
      <img src="favicon.svg" />
      <h1>Grimoire</h1>
      <p>A magical grimoire of developer knowledge</p>
      <a routerLink="/flashcards"> Go to magic flashcards! </a>
    </div>
  `,
  styles: `
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 30%;
      min-width: 320px;
      filter: drop-shadow(0 0 8px rgba(0, 255, 255, 0.5));
    }
    h1 {
      font-size: 4rem;
      color: #8eefff;
      letter-spacing: 3px;
    }
    p {
      font-size: 1.5rem;
      font-style: italic;
      text-align: center;
    }
  }
  `,
})
export default class Home {}

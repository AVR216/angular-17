import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <h3>Los juegos favoritos de {{username}}</h3>
    <ul>
      @for (game of games; track game.id) {
        <li (click)="fav(game.name)">
          {{ game.name }}
        </li>
      }
    </ul>
  `,
  styles: `
  li {
    cursor: pointer;
  }
  `
})
export class GamesComponent {

  @Input() username!: string;
  @Output() addFavEvent = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFavEvent.emit(gameName);
  }

  games = [
    {
      id: 1,
      name: 'Uncharted 4'
    },
    {
      id: 2,
      name: 'Horizont zero down'
    },
    {
      id: 3,
      name: 'GTA 6'
    }
  ];
}

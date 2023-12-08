import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  username = 'AVR216';
  isLoggedIn = false;
  favGame!: string;

  greet() {
    alert(`Hola ${this.username}`)
  }

  getFavGame(gameName: string) {
    this.favGame = gameName;
  }
}

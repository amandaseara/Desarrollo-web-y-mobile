import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent {
  @Input() selectedGame: any;
  @Output() closeGame = new EventEmitter<void>();
}

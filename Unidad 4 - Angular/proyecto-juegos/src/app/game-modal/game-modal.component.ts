import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-modal',
  templateUrl: './game-modal.component.html',
  styleUrls: ['./game-modal.component.css']
})
export class GameModalComponent {
  @Input() selectedGame: any;
  @Output() closeGame = new EventEmitter<void>();
}

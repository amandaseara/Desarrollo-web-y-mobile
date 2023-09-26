import { Component, Input, OnInit } from '@angular/core';
import { GetGamesService } from '../service/get-games.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})

export class GameDetailComponent implements OnInit{
  @Input() selectedGame: any;
  description:any;

  constructor(private gameService: GetGamesService){}

  ngOnInit(): void {
    this.getDetails(this.selectedGame.id);
  }

  getDetails(gameId: string){
    this.gameService.getDetails(gameId).subscribe(response => this.description = response.description);
  }

  getDescriptionText(descriptionHTML: string): string {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = descriptionHTML;

    return tempElement.textContent || tempElement.innerText || '';
  }

}

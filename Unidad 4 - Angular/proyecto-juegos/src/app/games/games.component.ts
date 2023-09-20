import { Component, OnInit } from '@angular/core';
import { GetGamesService } from '../service/get-games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit{

  games: any;

  constructor(private gameService: GetGamesService){}
  ngOnInit(): void {
    this.getGames();
  }

  getGames(){
    this.gameService.getGames().subscribe(response => this.games = response.results);
  }
  
}

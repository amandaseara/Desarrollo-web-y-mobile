import { Component, OnInit } from '@angular/core';
import { GetGamesService } from '../service/get-games.service';
import { Subject, debounceTime, switchMap } from 'rxjs';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit{

  games: any;
  selectedGame: any;
  gamesSearch: any;
  private searchTerms = new Subject<string>();

  constructor(private gameService: GetGamesService){}
  ngOnInit(): void {
    this.getGames();

    this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.gameService.searchGames(term))
    ).subscribe(searchResults => this.gamesSearch = searchResults);

  }

  getGames(){
    this.gameService.getGames().subscribe(response => this.games = response.results);
  }

  selectGame(game: any) {
    this.selectedGame = game;
  }
  
  closeGame(){
    this.selectedGame = null;
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

}

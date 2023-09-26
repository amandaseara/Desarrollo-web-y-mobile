import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetGamesService {

  constructor(private http: HttpClient) { }

  public getGames(): Observable<any>{
    return this.http.get<any>("https://api.rawg.io/api/games?key=1d44a7be87794112afbd4072eb27ffdd");
  }

  public getDetails(id:string): Observable<any>{
    return this.http.get<any>("https://api.rawg.io/api/games/"+id+"?key=1d44a7be87794112afbd4072eb27ffdd");
  }

  searchGames(term: string): Observable<any> {
    if (!term.trim()) {
      // if not search term, return empty game array.
      return of([]);
    }
    return this.http.get<any>(`https://api.rawg.io/api/games?key=1d44a7be87794112afbd4072eb27ffdd`).pipe(
      map((response: any) => {
        const games = response.results.filter((game: any) => game.name.toLowerCase().includes(term.toLowerCase()));
        return games;
      })
    );
  }

}

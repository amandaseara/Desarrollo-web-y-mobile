import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetGamesService {

  constructor(private http: HttpClient) { }

  public getGames(): Observable<any>{
    return this.http.get<any>("https://api.rawg.io/api/games?key=1d44a7be87794112afbd4072eb27ffdd");
  }

}

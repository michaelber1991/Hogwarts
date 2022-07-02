import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { House } from '@models/index';
import { map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  configUrl = 'http://hp-api.herokuapp.com/api/characters/house/';

  constructor(private http: HttpClient) { }

  getCharacters(house: string) {
    return this.http.get<any>(`${this.configUrl}${house}`).pipe(map(response => {
      let mappedResponse: House[] = [];
      response.forEach((item: any) => {
        mappedResponse.push(new House(item))
      });
      return mappedResponse;
    }));
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { House } from '@models/index';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  configUrl = 'http://hp-api.herokuapp.com/api/characters/staff';

  constructor(private http: HttpClient) { }

  getStudents() {
    return this.http.get<any>(`${this.configUrl}`).pipe(map(response => {
      let mappedResponse: House[] = [];
      response.forEach((item: any) => {
        mappedResponse.push(new House(item))
      });
      return mappedResponse;
    }));
  }
}

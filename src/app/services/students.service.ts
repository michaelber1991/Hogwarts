import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { House } from '@models/index';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  configUrl = 'http://hp-api.herokuapp.com/api/characters/students';

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

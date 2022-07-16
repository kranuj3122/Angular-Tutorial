import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApisDataService {
  url = 'https://jsonplaceholder.typicode.com/todos/';
  constructor(private http: HttpClient) {}

  fetch() {
    return this.http.get(this.url);
  }
}

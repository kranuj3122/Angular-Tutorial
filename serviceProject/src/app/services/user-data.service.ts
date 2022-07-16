import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor() {}
  user() {
    return [
      { name: 'anuj', age: '22', email: 'anuj@gmail.com' },
      { name: 'Tony', age: '52', email: 'tony@gmail.com' },
      { name: 'Peter', age: '27', email: 'peter@gmail.com' },
      { name: 'Strange', age: '32', email: 'strange@gmail.com' },
    ];
  }
}


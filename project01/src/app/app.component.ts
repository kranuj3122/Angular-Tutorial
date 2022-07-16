import { Component } from '@angular/core';
import { dataType } from './models/dataTypes';
/*
interface dataType {
  name: string;
  age: number;
  indian: boolean;
  addr:string
}
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Laddoooo';
  obj: dataType = {
    name: "anuj",
    age: 25,
    indian: false,
    addr: 'adbfg',
  };
}

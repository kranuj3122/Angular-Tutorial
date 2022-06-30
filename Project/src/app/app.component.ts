import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public hasError = false;
  public color = 'orange';
  public multipleStyle = {
    color: 'lightgreen',
    fontStyle: 'italic',
  };
  public name = 'Anuj';
  public onClick() {
    this.name = 'Kumar';
  }
  public data = '';
  public getData(val: any) {
    this.data = val;
  }
  public val = '';
  public displayName = true;
  public colors = ['red', 'blue', 'green', 'orange', 'yellow'];
  public message = "";
}

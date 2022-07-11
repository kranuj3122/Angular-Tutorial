import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-new-component]',
  template: `
    <h2>Hello from New Component</h2>
    // interpolation
    <h3>Welcome {{ name }}</h3>
    <h3>{{ greeting() }}</h3>
    <h3>{{ 'welcome ' + name }}</h3>
    <h3>{{ 2 + 2 }}</h3>

    // property-binding
    <input value="Anuj" type="text" [id]="myId" />
    <input [disabled]="false" value="kumar" type="text" id="{{ myId }}" />
    <input bind-disabled="true" value="kumar" type="text" id="{{ myId }}" />
    <br>

    // class binding
    <h2 [class]="myClass">Welcome {{ name }}</h2>
    <h2 class="special-text" [class]="myClass">{{"02 " + name }}</h2>
    <h2 [class.danger-text]="hasError">{{ name }}</h2>
    <h2 [ngClass]="multipleClass">{{ name }}</h2>
  `,
  styles: [
    `
      .success-text {
        color: green;
      }
      .danger-text {
        color: red;
      }
      .special-text {
        font-style: italic;
      }
      h3 {
        color: blue;
      }
    `,
  ],
})
export class NewComponentComponent implements OnInit {
  public name = 'Anuj';
  public myId = 'testId';
  public myClass = 'success-text';
  public hasError = false;
  public isSpecial = true;
  public multipleClass = {
    'success-text': !this.hasError,
    'danger-text': this.hasError,
    'special-text': this.isSpecial,
  };
  public greeting() {
    return 'Good morning ' + this.name;
  }

  constructor() {}

  ngOnInit(): void {}
}

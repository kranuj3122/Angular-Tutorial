import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public date = new Date();
  public title = 'Project';
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
  public message = '';

  public formData: any = {};
  getFormdata(data: any) {
    console.log(data);
    this.formData = data;
    console.log(this.formData);
  }

  myReactivForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  getFormdata2(data: any) {
    console.table(data);
  }

  get userValidator() {
    return this.myReactivForm.get('user');
  }
  get passwordValidator() {
    return this.myReactivForm.get('password');
  }
}

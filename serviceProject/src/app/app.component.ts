import { Component } from '@angular/core';
import { ApisDataService } from './services/apis-data.service';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'serviceProject';

  users: any;
  apis:any;
  constructor(private userdata: UserDataService, private apidata:ApisDataService) {
    this.users = userdata.user();
    apidata.fetch().subscribe((data) => {
      this.apis = data;
      console.log(this.apis);
    });
  }
}

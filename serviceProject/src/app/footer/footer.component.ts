import { Component, OnInit } from '@angular/core';
import { ApisDataService } from '../services/apis-data.service';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  users: any;
  apis:any;
  constructor(private userdata: UserDataService, private apidata:ApisDataService) {
    this.users = userdata.user();
    apidata.fetch().subscribe((data) => {
      this.apis = data;
    });
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isUserLoggedIn = false;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    let storeData = localStorage.getItem('isUserLoggedIn');
    console.log('StoreData: ' + storeData);

    if (storeData != null && storeData == 'true') this.isUserLoggedIn = true;
    else this.isUserLoggedIn = false;
  }
}

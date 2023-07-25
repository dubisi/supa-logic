import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  admin = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.auth.login(this.admin.getRawValue()).subscribe((data) => {
       console.log('Is login Success: ' + data);
    
      if (data) {
        localStorage.setItem('isUserLoggedIn', 'true');
        this.router.navigate(['/dashboard']);
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from '../../components/shared/services/admin-auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  username: string = '';
  password: string = '';
  loginFailed: boolean = false;

  constructor(private adminAuthService: AdminAuthService) {}
  ngOnInit() {
  }

  login() {
    this.adminAuthService.login(this.username, this.password).subscribe(
      (response) => {
        if (response.success) {
          console.log('Login successful');
        } else {
          this.loginFailed = true;
        }
      },
      () => {
        this.loginFailed = true;
      }
    );
  }
}

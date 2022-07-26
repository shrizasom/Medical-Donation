import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  usertype:string|null="";
  username:string|null="";
  loggedin:boolean=false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.usertype=this.authService.userType();
    this.username=this.authService.username();
    this.loggedin=this.authService.isLoggedIn();
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  usertype:string|null="";
  username:string|null="";
  userid:number|null=0;
  loggedin:boolean=false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.usertype=this.authService.userType();
    this.username=this.authService.username();
    this.loggedin=this.authService.isLoggedIn();
    this.userid=this.authService.userId();
  }
  logout() {
    this.authService.logout();
  }
}

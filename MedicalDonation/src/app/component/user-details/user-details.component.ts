import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/model/auth';
import { AuthService } from 'src/app/service/auth.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  usertype:string|null="";
  username:string|null="";
  userid:number|null=0;
  loggedin:boolean=false;
  auth : Auth={
    id: 0,
    usertype: 'user',
    username: '',
    password: '',
    email: '',
    address: '',
    phnum: 0,
  };
  constructor(
    private authService: AuthService, 
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.usertype=this.authService.userType();
    this.username=this.authService.username();
    this.loggedin=this.authService.isLoggedIn();
    this.userid=this.authService.userId();
    this.getUser();
  }
  getUser() {
    this.authService.getAuthById(this.route.snapshot.params['id']).subscribe({
      next: (response: any) => {
        let cnt=0
        this.auth= response;
       
        console.log(this.auth);  
        },
      error: (error: any) => {
        console.log(error);
      },
    });
  } 

}

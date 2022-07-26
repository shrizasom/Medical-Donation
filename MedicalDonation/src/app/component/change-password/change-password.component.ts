import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/model/auth';
import { AuthService } from 'src/app/service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  usertype:string|null="";
  username:string|null="";
  userid:number|null=0;
  password:string|null="";
  newpass="";
  confirmpass="";
  loggedin:boolean=false;
  errormessage='';
  constructor(private authService: AuthService,
     private router: Router,
     private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.usertype=this.authService.userType();
    this.username=this.authService.username();
    this.loggedin=this.authService.isLoggedIn();
    this.userid=this.authService.userId();
    this.password=localStorage.getItem('password');
  }
  changepassword(){
    if(this.newpass==this.password){
      this.errormessage='Try another password. New password can not be similar to previous password.' 
    }else{
      this.errormessage='';
      this.authService.updatePassword(this.route.snapshot.params['id'],this.newpass).subscribe({
        next: (response: any) => {
          console.log(response);
          this.authService.logout();
          this.router.navigate(['/login']);
        },
        error: (error: any) => {
          console.log(error);
        },
      });
    }
  }
}

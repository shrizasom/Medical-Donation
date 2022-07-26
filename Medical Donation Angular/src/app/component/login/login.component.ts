import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/model/auth';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  auth :  Auth={
    id: 0,
    usertype: 'user',
    username: '',
    password: '',
    email: '',
    address: '',
    phnum: 0,
  };
  errorMessage = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    this.authService.login(this.auth).subscribe({
      next: (response: any) => {
        console.log(response);
        localStorage.setItem('usertype', response.usertype);
        localStorage.setItem('username', response.username);
        localStorage.setItem('password',response.password);
        localStorage.setItem('id',response.id);
        if (localStorage.getItem('id')==null) {
          this.errorMessage="Invalid Account!"
          
        } else {
          if (this.auth.password!=localStorage.getItem('password')){
            this.errorMessage="Incorrect Password!"
          }
          else{
            if(this.authService.isChangePass(this.auth.password)){
              this.router.navigate(['changepassword/',localStorage.getItem('id')]); 
            }
            else{
              this.router.navigate(['/']);
            }
          }
        }
        
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

}

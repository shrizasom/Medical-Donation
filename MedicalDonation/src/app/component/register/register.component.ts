import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/model/auth';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  auth : Auth={
    id: 0,
    usertype: 'user',
    username: '',
    password: '',
    email: '',
    address: '',
    phnum: 0,
  };
  users : Auth[]=[];
  usernames: string[]=[];
  emails: string[]=[];
  constructor(
    private authService: AuthService, private router: Router
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }
  register(){
    this.authService.register(this.auth).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  getUsers() {
    this.authService.getAll().subscribe({
      next: (response: any) => {
         this.users= response;
         for (let index = 0; index < this.users.length; index++) {
          this.usernames[index]=this.users[index].username;
          this.emails[index]=this.users[index].email;
         }
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }


}

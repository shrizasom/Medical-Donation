import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/model/auth';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  selected :string|null= "Select User Type"
  users: Auth[]=[];
  user:Auth[]=[];
  constructor(
    private authService: AuthService, private router: Router
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.authService.getAll().subscribe({
      next: (response: any) => {
        let cnt=0
        this.users= response;
        for(let i=0;i<this.users.length;i++){
          if(this.users[i].usertype=='user'){
            this.user[cnt]=this.users[i];
            cnt++;
          }
        }
        console.log(this.users);  
        },
      error: (error: any) => {
        console.log(error);
      },
    });
  } 

}

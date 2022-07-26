import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/model/auth';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-ngo',
  templateUrl: './ngo.component.html',
  styleUrls: ['./ngo.component.css']
})
export class NgoComponent implements OnInit {
  selected :string|null= "Select User Type"
  users: Auth[]=[];
  ngo:Auth[]=[];
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
          if(this.users[i].usertype=='ngo'){
            this.ngo[cnt]=this.users[i];
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';
import { Auth } from 'src/app/model/auth';
import { AuthService } from 'src/app/service/auth.service';
import { DonationService } from 'src/app/service/donation.service';
import { Donation } from 'src/app/model/donation';
@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {
  usertype:string|null="";
  username:string|null="";
  userid:number|null=0;
  donation:Donation[]=[];
  notassigned= new Map<number|null,[string,Auth]>;
  medicine: Post = {
    id: 0,
    title: '',
    image: '',
    mfd_Date:'',
    exp_Date: '',
    quantity: 0,
  };
  users:Auth[]=[];
  exe:Auth[]=[];
  selected:number[]=[];
  constructor(
    private router: Router,
    private postService: PostService,
    private route: ActivatedRoute,
    private donationService : DonationService,
    private authService : AuthService,
    
  ) { }


  ngOnInit(): void {
    
    this.usertype=this.authService.userType();
    this.username=this.authService.username();
    this.userid=this.authService.userId();
    this.getexe();
    this.getna();
  }
  getPost(id:number|null) {
    this.postService.getPost(id).subscribe({
      next: (response: any) => {
         this.medicine= response;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  getna(){
    this.donationService.getAll().subscribe({
      next: (response: any) => {
         this.donation=response;
         this.donation.forEach(donation => {
          if(donation.exec_id==0 && donation.ifDonation==true){
            this.getPost(donation.med_id);
            console.log(this.medicine.title);
            this.authService.getAuthById(donation.user_id).subscribe({
              next: (response: any) => {
                this.notassigned.set(donation.id,[this.medicine.title,response]);
                console.log(this.notassigned);
             },
             error: (error: any) => {
               console.log(error);
             },  
            })
          
       }
         });
         
         console.log(this.donation)
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  assign(id:number|null,exec_id:number|null){
    this.donationService.assign(id,this.userid,exec_id).subscribe({
      next: (response: any) => {
        console.log(response);
        window.alert("Assigned Succesfully!")
     },
     error: (error: any) => {
       console.log(error);
     },
    })
  }
  getexe() {
    this.authService.getAll().subscribe({
      next: (response: any) => {
        let cnt=0
        this.users= response;
        for(let i=0;i<this.users.length;i++){
          if(this.users[i].usertype=='executive'){
            this.exe[cnt]=this.users[i];
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

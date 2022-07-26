import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';
import { Auth } from 'src/app/model/auth';
import { AuthService } from 'src/app/service/auth.service';
import { DonationService } from 'src/app/service/donation.service';
import { Donation } from 'src/app/model/donation';
@Component({
  selector: 'app-view-donation',
  templateUrl: './view-donation.component.html',
  styleUrls: ['./view-donation.component.css']
})
export class ViewDonationComponent implements OnInit {
  usertype:string|null="";
  username:string|null="";
  userid:number|null=0;
  donation:Donation[]=[];
  d= new Map<number|null,[
    Date,
    boolean,
    number|null,string,
    number|null,string,
    number|null,string,
    number|null,string]>;
  med_title:string[]=[];
  uname:string[]=[];
  ename:string[]=[];
  nname:string[]=[];
  medicine: Post[] = [];
  user : Auth[]=[];
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
    this.getPost();
    this.getUser();
    this.getdonation();

  }
  getPost() {
    this.postService.getAllPost().subscribe({
      next: (response: any) => {
         this.medicine= response;
         this.medicine.forEach(medicine => {
          this.med_title[medicine.id??0]=medicine.title;
         });
         console.log(this.med_title)
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  getUser() {
    this.authService.getAll().subscribe({
      next: (response: any) => {
        this.user=response;
        this.user.forEach(user => {
          if(user.usertype=='user'){
            this.uname[user.id??0]=user.username;
          }
          if(user.usertype=='executive'){
            this.ename[user.id??0]=user.username;
          }
          if(user.usertype=='ngo'){
            this.nname[user.id??0]=user.username;
          }
         });
         console.log(this.uname);
         console.log(this.ename);
         console.log(this.nname);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  /*getPost() {
    this.postService.getAllPost().subscribe({
      next: (response: any) => {
         this.medicine= response;
         console.log(this.medicine)
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  getUser() {
    this.authService.getAll().subscribe({
      next: (response: any) => {
        this.user=response;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }*/
  getdonation(){
    this.donationService.getAll().subscribe({
      next: (response: any) => {
         this.donation=response;
         this.donation.forEach(donation => {
          if(donation.ifDonation==true){
            let mid=donation.med_id ??0;
            let uid=donation.user_id ??0;
            let eid=donation.exec_id ??0;
            let nid=donation.ngo_id ??0;
            this.d.set(donation.id,
              [donation.dod,
                donation.collected,
                donation.med_id,this.med_title[mid],
                donation.user_id,this.uname[uid],
                donation.exec_id,this.ename[eid],
                donation.ngo_id,this.nname[nid],
              ]);
            }
            });
          
         console.log(this.d);
         console.log(this.donation);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  collect(id:number|null){
    this.donationService.collected(id).subscribe({
      next: (response: any) => {
        console.log(response);
        window.alert("Collected Succesfully!")
     },
     error: (error: any) => {
       console.log(error);
     },
    })
  }

}

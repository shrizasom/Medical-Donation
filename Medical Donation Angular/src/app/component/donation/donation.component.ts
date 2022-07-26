import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';
import { Auth } from 'src/app/model/auth';
import { AuthService } from 'src/app/service/auth.service';
import { DonationService } from 'src/app/service/donation.service';
import { Donation } from 'src/app/model/donation';
@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {
  usertype:string|null="";
  username:string|null="";
  userid:number|null=0;
  donation:Donation[]=[];
  notdonate= new Map<number|null,Post>;

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
    this.getnd();
  }
  getnd(){
    this.donationService.getAll().subscribe({
      next: (response: any) => {
         this.donation=response;
         this.donation.forEach(donation => {
          if(donation.ifDonation==false){
            this.postService.getPost(donation.med_id).subscribe({
              next: (response: any) => {
                this.notdonate.set(donation.id,response);
                console.log(this.notdonate);
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
  donate(id:number|null){
    this.donationService.donate(id).subscribe({
      next: (response: any) => {
        console.log(response);
        window.alert("Donated Succesfully!")
     },
     error: (error: any) => {
       console.log(error);
     },
    })
  }

}

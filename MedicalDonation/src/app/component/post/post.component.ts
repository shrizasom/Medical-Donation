import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';
import { Auth } from 'src/app/model/auth';
import { AuthService } from 'src/app/service/auth.service';
import { DonationService } from 'src/app/service/donation.service';
import { Donation } from 'src/app/model/donation';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  quantity:number[]=[];
  usertype:string|null="";
  username:string|null="";
  userid:number|null=0;

  donation:Donation={
    id: 0,
    dod: new Date,
    ifDonation: false,
    collected: false,
    med_id: 0,
    user_id: 0,
    ngo_id: 0,
    exec_id: 0,
  };
  medecines:Post[]=[];
  titles:string[]=[];

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
    this.donation.user_id=this.userid;
    this.getPosts();
  }
  getPosts() {
    this.postService.getAllPost().subscribe({
      next: (response: any) => {
         this.medecines= response;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  updateQuantity(id:number|null,q1:number,q2:number){
    if (this.usertype=='admin'){
      q1=q1+q2;
    }
    if (this.usertype=='user'){
      q1=q2-q1;
    }
    this.postService.updateQuantity(id,q1).subscribe({
      next: (response: any) => {
        console.log(response);
        window.alert("Updated Quantity Successfully!")
     },
     error: (error: any) => {
       console.log(error);
     }, 
    })
  }
  buy(id:number|null){
    this.donation.med_id=id;
    this.donationService.buy(this.donation).subscribe({
      next: (response: any) => {
        console.log(response);
        window.alert("Medicine Bought Succesfully!")
     },
     error: (error: any) => {
       console.log(error);
     },
    })
  }


}

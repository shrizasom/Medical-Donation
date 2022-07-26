import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './component/add-post/add-post.component';
import { AddNgoComponent } from './component/add-ngo/add-ngo.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { PostComponent } from './component/post/post.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DonationComponent } from './component/donation/donation.component';
import { AssignComponent } from './component/assign/assign.component';
import { ViewDonationComponent } from './component/view-donation/view-donation.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { UserComponent } from './component/user/user.component';
import { PostDetailsComponent } from './component/post-details/post-details.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { ViewOrderComponent } from './component/view-order/view-order.component';
import { NgoComponent } from './component/ngo/ngo.component';
const routes: Routes = 
[{ path: '', component: DashboardComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{path: 'addngo', component: AddNgoComponent},
{ path: 'create', component: AddPostComponent },
{ path: 'edit/:id', component: AddPostComponent },
{ path: 'assign', component: AssignComponent },
{ path: 'changepassword/:id', component: ChangePasswordComponent },
{ path: 'donation', component: DonationComponent },
{ path: 'post', component: PostComponent },
{ path: 'postdetails/:id', component: PostDetailsComponent },
{ path: 'user', component: UserComponent },
{ path: 'userdetails/:id', component: UserDetailsComponent},
{ path: 'userdetails/:username', component: UserDetailsComponent},
{ path: 'viewdonation', component: ViewDonationComponent },
{ path: 'vieworder', component: ViewOrderComponent },
{ path: 'ngo', component: NgoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ViewOrderComponent } from './component/view-order/view-order.component';
import { NgoComponent } from './component/ngo/ngo.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    AddNgoComponent,
    RegisterComponent,
    LoginComponent,
    PostComponent,
    DashboardComponent,
    DonationComponent,
    AssignComponent,
    ViewDonationComponent,
    NavbarComponent,
    UserDetailsComponent,
    UserComponent,
    PostDetailsComponent,
    ChangePasswordComponent,
    ViewOrderComponent,
    NgoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

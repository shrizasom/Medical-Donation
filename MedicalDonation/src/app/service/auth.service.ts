import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../model/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(auth: Auth) {
    return this.http.post(`http://localhost:8084/api/auth/login`, auth);
  }

  register(auth: Auth) {
    return this.http.post(`http://localhost:8084/api/auth/register`, auth);
  }
  addNgo(auth: Auth) {
    return this.http.post(`http://localhost:8084/api/auth/addngo`, auth);
  }
  getAuthById(id:number|null){
    return this.http.get(`http://localhost:8084/api/auth/getid/${id}`);
  }
  getAuthByName(username:string){
    return this.http.get(`http://localhost:8084/api/auth/getname/${username}`);
  }
  getAll(){
    return this.http.get(`http://localhost:8084/api/auth/all`);
  }
  update(auth: Auth) {
    return this.http.put(`http://localhost:8084/api/auth/update`, auth);
  }
  updatePassword(id: number|null, password:string) {
    let data=[id,password];    
    return this.http.put(`http://localhost:8084/api/auth/password/${data[0]}/${data[1]}`,data);
  }
  isLoggedIn() {
    return localStorage.getItem('username') !== null;
  }

  userType() {
    return localStorage.getItem('usertype');
  }
  userId(){
    var id=localStorage.getItem('id')
    return id !== null ? parseInt(id) : id;
  }
  username(){
    return localStorage.getItem('username')
    
  }
  isChangePass(pass:string){
    
    return pass.charAt(0)=='M';
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('usertype');
    localStorage.removeItem('id');
    localStorage.removeItem('pass');
    this.router.navigate(['/login']);
  }
}
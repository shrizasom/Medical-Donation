import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  save(post: Post) {
    return this.http.post('http://localhost:8084/api/post/create', post);
  }

  update(post: Post) {
    return this.http.put('http://localhost:8084/api/post/update', post);
  }
  updateQuantity(id:number|null,q:number) {
    let data=[id,q];
    return this.http.put(`http://localhost:8084/api/post/quantity/${data[0]}/${data[1]}`,data);
  }
  getPost(id: number|null) {
    return this.http.get(`http://localhost:8084/api/post/${id}`);
  }

  delete(id: number|null) {
    return this.http.delete(`http://localhost:8084/api/post/${id}`);
  }

  getAllPost() {
    return this.http.get('http://localhost:8084/api/post/all');
  }
}
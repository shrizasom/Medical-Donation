import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Donation } from '../model/donation';

@Injectable({
  providedIn: 'root',
})
export class DonationService{
    constructor(private http: HttpClient, private router: Router) {}
    buy(donation:Donation){
        return this.http.post(`http://localhost:8084/api/donation/buy`,donation);
    }
    assign(id:number|null,ngo_id:number|null,exec_id:number|null){
        let data=[id,ngo_id,exec_id];
        return this.http.put(`http://localhost:8084/api/donation/assign/${data[0]}/${data[1]}/${data[2]}`,data); 
    }
    update(donation:Donation){
        return this.http.put(`http://localhost:8084/api/donation/update`,donation);  
    }
    donate(id : number|null){
        return this.http.put(`http://localhost:8084/api/donation/checkDonation/${id}`,id);
    }
    collected(id : number|null){
        return this.http.put(`http://localhost:8084/api/donation/collected/${id}`,id);
    }
    getById(id:number|null){
        return this.http.get(`http://localhost:8084/api/donation/${id}`);
    }
    getAll(){
        return this.http.get(`http://localhost:8084/api/donation/all`); 
    }
    delete(id: number|null) {
        return this.http.delete(`http://localhost:8084/api/donation/${id}`);
      }
}
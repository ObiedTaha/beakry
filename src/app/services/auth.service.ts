import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }


  signUp(userData: object): Observable<any> {
    return this.httpClient.post(`https://upskilling-egypt.com:3001/contact`, userData)
  }
}

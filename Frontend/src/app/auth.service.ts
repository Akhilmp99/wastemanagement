import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnyMxRecord } from 'dns'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
loginUser(user: AnyMxRecord)
{
  return this.http.post("http://localhost:4000/login",user)
  .subscribe((data)=>{
    console.log('success')
  })
}
  constructor(private http:HttpClient) { }
}


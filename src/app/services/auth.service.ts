import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private routerService: Router) { }

  loginUser(user: any){
    return this.httpClient.post("https://back-iglesia-3c289a779c5b.herokuapp.com/administradores/login",user,{headers: {"Content-Type": "application/json"} })
  }
  isLoggedIn(){
    return localStorage.getItem('token')? true:false
  }
  getToken(){
    return localStorage.getItem('token')
  }
  logoutUser(){
    localStorage.removeItem('token')
    this.routerService.navigate([''])
  }
}

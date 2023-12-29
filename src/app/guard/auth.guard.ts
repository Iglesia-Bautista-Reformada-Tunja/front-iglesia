import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private authService: AuthService, private routerService: Router) { }

  canActivate(): boolean{
    if(this.authService.estoyLogged()){
      return true
    }else{
      this.routerService.navigate([''])
      return false
    }
  }
}

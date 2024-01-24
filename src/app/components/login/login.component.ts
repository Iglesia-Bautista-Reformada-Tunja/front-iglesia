import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  datosLogin = {
    usuario: "",
    password: ""
  }
  constructor(private authService: AuthService, private routerService: Router, private toastr: ToastrService) { }
  ngOnInit(): void {}
  login() {
    this.authService.loginUser(this.datosLogin).subscribe((res) => {
      if ((res as any).token) {
        localStorage.setItem('token', (res as any).token)
        this.routerService.navigate(['/gestionUno'])
      }else{
        this.toastr.error((res as any).msg, 'Error!');
      }
    })
  }
}
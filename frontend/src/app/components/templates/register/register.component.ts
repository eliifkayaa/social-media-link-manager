import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../../../commons/model/login.model';
import { SharedModule } from '../../../commons/modules/shared/shared.module';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(
    private _http: HttpClient,
    private _router: Router
  ){}

  register(form:NgForm){
    this._http.post<LoginModel>("http://localhost:3000/api/auth/register",form.value).subscribe({
      next: (res)=>{
        localStorage.setItem("user",JSON.stringify(res.user));
        localStorage.setItem("accessToken", res.token);
        this._router.navigateByUrl("/");
      },
      error: (err)=>{
        alert(err.error.message);
        console.log(err);
      }
    })
  }
}

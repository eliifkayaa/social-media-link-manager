import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../../../commons/model/login.model';
import { SharedModule } from '../../../commons/modules/shared/shared.module';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private _http: HttpClient,
    private _router: Router
  ){}

  login(form: NgForm){
    // POST isteği gönderir. Form verilerini `form.value` ile API'ye iletir.
    this._http.post<LoginModel>("http://localhost:3000/api/auth/login", form.value).subscribe({
      next: (res)=>{
        // Yanıt verilerini `localStorage`'a kaydeder
        localStorage.setItem("user", JSON.stringify(res.user));
        localStorage.setItem("accessToken", res.token);
        this._router.navigateByUrl("/home");
      },
      error: (err)=> {
        alert(err.error.message);
        console.log(err);
      }
    })
   }
}

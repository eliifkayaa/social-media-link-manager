import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})

//Guard, kullanıcıların belirli sayfalara erişimini kontrol etmek için kullanılır.
//CanActivate arayüzünü implement eder, yani bu sınıf bir rotanın erişilebilir olup olmadığını kontrol eder.
export class AuthGuard implements CanActivate {
  constructor(private _router: Router) {}

  // canActivate fonksiyonu, bir rota erişimi kontrolü yapar.
  // Bu fonksiyon, Angular'ın router'ı tarafından çağrılır ve rota erişimini kontrol eder.
  canActivate(
    route: ActivatedRouteSnapshot, // Rotanın yolunda bulunan bilgileri içerir.
    state: RouterStateSnapshot    // Geçerli yönlendirme durumunu içerir.
  ): boolean {
    const token = localStorage.getItem('accessToken');
    // localStorage'den 'accessToken' isimli öğeyi alıyoruz.
    // Eğer bu token mevcut değilse, kullanıcı giriş yapmamış demektir. 
    if (!token) {
      //Eğer token yoksa, kullanıcıyı '/login' sayfasına yönlendiriyoruz.
      this._router.navigate(['/login']);
      return false;
    }
    return true;  // Eğer token varsa, kullanıcıya erişim izni veriyoruz ve true döndürüyoruz.
  }
}

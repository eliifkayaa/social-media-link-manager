import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { catchError, Observable, of } from 'rxjs';
import { SocialMediaService } from '../services/social-media.service';

//Resolver bir rota için gerekli verilerin yüklenmesini ve hazır hale getirilmesini sağlar. Kullanıcı belirli bir rotaya gitmeden önce verilerin yüklenmesini ve rotanın sadece veriler hazır olduğunda yüklenmesini sağlar. Bu, kullanıcıya eksik veri gösterilmesini engeller.
@Injectable({
  providedIn: 'root',
})
export class LinkResolver implements Resolve<any> {
  constructor(private socialMediaService: SocialMediaService) {}

  // resolve metodu, rota çözümleme işlemi sırasında çağrılır.
  // - route: Aktif rota bilgilerini içerir.
  // - state: Geçerli yönlendirme durumunu içerir.
  // Metodun dönüş tipi, verilerin yükleneceği bir Observable'dır. Observable, veri akışlarını temsil eder.
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const id = route.paramMap.get('id'); // Rota parametrelerinden 'id' değerini alıyoruz.
    if (id) {
       // Eğer id varsa, socialMediaService kullanılarak ilgili veri yüklenir.
      return this.socialMediaService.getLinkById(id).pipe(
        catchError((error) => {
          // Hata durumunu işleyin
          console.error('Veri yüklenirken hata:', error);
          return of(null); // Veya uygun bir varsayılan değer döndürün
        })
      );
    } else {
      return of(null);  // Eğer id mevcut değilse, boş bir Observable döndürülür.
    }
  }
}

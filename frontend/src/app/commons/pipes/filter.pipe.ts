import { Pipe, PipeTransform } from '@angular/core';
import { SocialMediaModel } from '../model/socialMedia.model';

//Pipe, veri dönüştürme ve formatlama işlemleri yapmak için kullanılır
@Pipe({
  name: 'filterPipe',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  // transform metodu, veri dönüşümünü gerçekleştirir.
  // - value: Filtrelenecek veri listesi (SocialMediaModel dizisi).
  // - search: Kullanıcının arama terimi.
  // Metodun dönüş tipi, dönüştürülmüş veri listesi (SocialMediaModel dizisi)
  transform(value: SocialMediaModel[], search: string): SocialMediaModel[] {
    if (search == '')
      // Eğer arama terimi boşsa, orijinal listeyi döndürüyoruz. Böylece, hiçbir filtre uygulanmamış olur.
      return value;

    // Arama terimi ile karşılaştırılan ve filtrelenen listeyi döndürüyoruz.
    // value dizisindeki her bir öğeyi kontrol ediyoruz ve name özelliğinin
    // arama terimini içermesi durumunda bu öğeyi filtreliyoruz.
    // 'toLowerCase()' ile arama ve öğe adı küçük harfe dönüştürülerek karşılaştırma yapılır.
    return value.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }
}

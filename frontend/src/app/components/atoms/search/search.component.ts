import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { SharedModule } from '../../../commons/modules/shared/shared.module';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, // Angular form kontrolü için kullanılan token
      useExisting: forwardRef(() => SearchComponent), // Bu bileşeni form değerini yönetmek için kullanır
      multi: true, // Birden fazla sağlayıcıya izin verir
    },
  ],
})
export class SearchComponent implements ControlValueAccessor {
  @Input() type: string = '';
  @Input() placeholder: string = '';
  @Input() iconClass: string = '';
  search: string = '';

  // Form değerindeki değişiklikleri ve formun dokunduğunu belirten işlevler
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  // Form değerini dışarıdan alır ve bileşene ayarlar
  writeValue(value: string): void {
    this.search = value;
  }

  // Form değeri değiştiğinde çağrılacak işlevi kaydeder
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  // Form kontrolü dokunduğunda çağrılacak işlevi kaydeder
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Arama terimindeki değişiklikleri işler ve form değerini günceller
  onSearchChange(event: Event): void {
    const target = event.target as HTMLInputElement; // Olay hedefini HTMLInputElement olarak al
    if (target) {
      // Eğer hedef geçerli bir HTMLInputElement ise
      this.search = target.value; // Giriş elemanının değerini güncelle
      this.onChange(this.search); // Form değeri değiştiğinde geri çağırma işlevini tetikle
      this.onTouched(); // Formun dokunulduğunu bildir
    } else {
      console.error('undefined'); // Hedef tanımlı değilse hata mesajı
    }
  }
}

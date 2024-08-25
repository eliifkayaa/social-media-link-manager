import { Component, forwardRef, Input } from '@angular/core';
import { SharedModule } from '../../../commons/modules/shared/shared.module';
import { ValidDirective } from '../../../commons/directives/valid.directive';
import { FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [SharedModule, ValidDirective],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, // Angular'ın form kontrolü için kullanılan token
      useExisting: forwardRef(() => InputFieldComponent), // Bu bileşenin form değerini yönetmesini sağlar
      multi: true, // Birden fazla sağlayıcıya izin verir
    },
  ],
})
export class InputFieldComponent {

  @Input() label: string =  '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() appValidMessage: string = ''; // Validasyon mesajı
  @Input() validType: 'url' | 'required' = 'required'; // Validasyon türü

  control: FormControl = new FormControl('');

  // Form değerini değiştirmek ve formun dokunduğunu belirtmek için kullanılan işlevler
  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

   //Form kontrolünün değerini dışarıdan alır.
  writeValue(value: any): void {
    this.control.setValue(value);
  }

  //Form kontrolü değeri değiştiğinde çağrılacak işlevi kaydeder.
  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
    this.control.valueChanges.subscribe(this.onChange);
  }

  //Form kontrolü dokunduğunda çağrılacak işlevi kaydeder.
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}

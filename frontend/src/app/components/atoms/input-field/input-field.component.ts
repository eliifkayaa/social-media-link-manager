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
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true,
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

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.control.setValue(value);
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
    this.control.valueChanges.subscribe(this.onChange);
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}

import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../commons/modules/shared/shared.module';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss'
})
export class InputFieldComponent {

  @Input() label: string =  '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';

  private _value: string = '';

  @Input()
  get value(): string {
    return this._value;
  }

  set value(val: string) {
    this._value = val;
  }
}

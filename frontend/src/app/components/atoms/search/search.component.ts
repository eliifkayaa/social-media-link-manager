import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { SharedModule } from '../../../commons/modules/shared/shared.module';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SearchComponent),
    multi: true
  }]
})
export class SearchComponent implements ControlValueAccessor{
  @Input() type: string = '';
  @Input() placeholder: string = '';
  @Input() iconClass: string = '';
  search: string = '';

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.search = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // Eğer bileşeninizin disable olmasını istiyorsanız burada işlem yapabilirsiniz.
  }

  onSearchChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target) {
      this.search = target.value;
      this.onChange(this.search);
      this.onTouched();
    } else {
      console.error('Event target is undefined');
    }
  }
}

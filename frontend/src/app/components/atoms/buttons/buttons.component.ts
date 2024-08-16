import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedModule } from '../../../commons/modules/shared/shared.module';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {
  @Input() buttonType: 'cancel' | 'save' | 'add' = 'save';
  @Input() label: string ='';
  @Input () icon?: string;

  // Click eventini parent component'e iletmek için EventEmitter kullanılır
  @Output() buttonClick = new EventEmitter<void>();

  handleClick() {
    this.buttonClick.emit();
  }
}

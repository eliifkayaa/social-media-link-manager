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
  @Input() buttonType: 'cancel' | 'save' | 'add' | 'update' | 'delete'= 'save';
  @Input() label: string ='';
  @Input () icon?: string;

  @Output() buttonClick = new EventEmitter<void>();

  handleClick() {
    this.buttonClick.emit();
  }

  getDefaultLabel() { 
    switch (this.buttonType) {
        case 'add':
          return 'Yeni Hesap Ekle';
        case 'update':
          return 'Güncelle';
        case 'delete':
          return 'Sil';
        case 'cancel':
          return 'Vazgeç';
        case 'save':
          return 'Kaydet';
        default:
          return '';
    }
  }
}
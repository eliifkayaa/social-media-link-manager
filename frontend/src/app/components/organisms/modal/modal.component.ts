import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { SharedModule } from '../../../commons/modules/shared/shared.module';
import { SocialMediaModel } from '../../../commons/model/socialMedia.model';
import { ButtonsComponent } from '../../atoms/buttons/buttons.component';
import { FormGroupComponent } from '../../molecules/form-group/form-group.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [FormGroupComponent, SharedModule, ButtonsComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, // Bileşenin değişim algılaması OnPush oalrak ayarlandı.
})
export class ModalComponent implements OnInit {
  constructor() {}

  @Input() isVisible: boolean = false; // Modal'ın görünürlük durumu.
  @Input() socialMedia: SocialMediaModel = new SocialMediaModel(); // Modal'a aktarılan veri.

  // Modal kapatıldığında dışa aktarılan olay.
  @Output() modalClose = new EventEmitter<void>();
  @Output() formSaved = new EventEmitter<void>();

  @Input() action: 'save' | 'update' = 'save'; // Formun kaydetme veya güncelleme amacıyla kullanıldığını belirten tür.

  ngOnInit(): void {}

  closeModal() {
    this.isVisible = false;
    this.modalClose.emit(); // Modal'in kapandığını parent bileşene bildirir.
  }

  onFormSaved() {
    console.log('Form başarıyla kaydedildi');
    this.formSaved.emit();
    this.closeModal(); // Modal'ı kapatır.
  }
}

import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { InputFieldComponent } from '../../atoms/input-field/input-field.component';
import { SharedModule } from '../../../commons/modules/shared/shared.module';
import { ButtonsComponent } from '../../atoms/buttons/buttons.component';
import { SocialMediaModel } from '../../../commons/model/socialMedia.model';
import { SocialMediaService } from '../../../commons/services/social-media.service';
import { ValidDirective } from '../../../commons/directives/valid.directive';

@Component({
  selector: 'app-form-group',
  standalone: true,
  imports: [
    SharedModule,
    InputFieldComponent,
    ButtonsComponent,
    ValidDirective,
  ],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss',
})
export class FormGroupComponent {
  @Input() socialMedia: SocialMediaModel = new SocialMediaModel();

  //Componentler arasında olaylarını dinler ve veri iletimi veya olay tetikleme sağlar
  @Output() formCancelled = new EventEmitter<void>();
  @Output() formSaved = new EventEmitter<void>();

  @ViewChild('linkField') linkField!: InputFieldComponent;
  @ViewChild('nameField') nameField!: InputFieldComponent;
  @ViewChild('descriptionField') descriptionField!: InputFieldComponent;

  constructor(private socialMediaService: SocialMediaService) {}
  onSaveClick() {
    this.socialMedia.link = this.linkField.value;
    this.socialMedia.name = this.nameField.value;
    this.socialMedia.description = this.descriptionField.value;

    this.socialMediaService.addSocialMedia(this.socialMedia).subscribe(
      (res) => {
        console.log('Kaydedildi', res);
        this.formSaved.emit(); //metodu kullanarak bir olay tetiklendiğinde veri gönderilir
      },
      (err) => {
        console.log('Hata', err);
      }
    );
  }

  onCancelClick() {
    console.log('Vazgeç butonuna tıklandı!');
    this.formCancelled.emit();
  }
}

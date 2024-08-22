import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputFieldComponent } from '../../atoms/input-field/input-field.component';
import { SharedModule } from '../../../commons/modules/shared/shared.module';
import { ButtonsComponent } from '../../atoms/buttons/buttons.component';
import { SocialMediaModel } from '../../../commons/model/socialMedia.model';
import { SocialMediaService } from '../../../commons/services/social-media.service';
import { ValidDirective } from '../../../commons/directives/valid.directive';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  standalone: true,
  imports: [SharedModule, InputFieldComponent, ButtonsComponent, ValidDirective],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss',
})
export class FormGroupComponent implements OnInit{
  @Input() socialMedia: SocialMediaModel = new SocialMediaModel();

  //Componentler arasında olaylarını dinler ve veri iletimi veya olay tetikleme sağlar
  @Output() formCancelled = new EventEmitter<void>();
  @Output() formSaved = new EventEmitter<void>();
  @Output() dataUpdated = new EventEmitter<void>();

  form: FormGroup;

  constructor(private socialMediaService: SocialMediaService, private fb: FormBuilder) {
    this.form = this.fb.group ({
      link: [''],
      name: [''],
      description: [''],
    })
  }
  ngOnInit(): void {}

  onSaveClick() {
    console.log('Kaydet butonuna tıklandı!');
    if (this.form.valid) {
      const socialMediaData = this.form.value;

      this.socialMediaService.add(socialMediaData).subscribe(
        response => {
          console.log('Başarıyla kaydedildi', response);
          this.formSaved.emit(); // Form kaydedildiğinde modal kapatır
        },
        error => {
          console.error('Kaydetme hatası:', error);
        }
      );
    } else {
      console.log('Form geçersiz');
    }
  }

  onCancelClick() {
    console.log('Vazgeç butonuna tıklandı!');
    this.formCancelled.emit();
  }

}

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
  @Input() action: 'save' | 'update' = 'save'; 
  @Output() formCancelled = new EventEmitter<void>();
  @Output() formSaved = new EventEmitter<void>();

  form: FormGroup; // Angular Reactive Form için FormGroup değişkeni

  constructor(private socialMediaService: SocialMediaService, private fb: FormBuilder) {
    this.form = this.fb.group({ // FormBuilder ile form oluşturma
      link: [''], 
      name: [''],
      description: [''],
    });
  }

  ngOnInit(): void {
    if (this.action === 'update' && this.socialMedia) {
    // Eğer işlem türü 'update' ve sosyal medya verisi varsa
      this.form.patchValue({
        // Formu mevcut sosyal medya verileri ile güncelle
        link: this.socialMedia.link,
        name: this.socialMedia.name,
        description: this.socialMedia.description
      });
    }
  }

  onSaveClick() {
    console.log('Kaydet butonuna tıklandı!');
    if (this.form.valid) {
      const socialMediaData = this.form.value;
      if (this.action === 'save') { // Eğer işlem türü 'save' ise
        this.socialMediaService.add(socialMediaData).subscribe( // Sosyal medya verisini ekler
          response => {
            console.log('Başarıyla kaydedildi', response);
            this.formSaved.emit(); // Form kaydedildiğinde modal kapatır
          },
          error => {
            console.error('Kaydetme hatası:', error);
          }
        );
      } else if (this.action === 'update') { // Eğer işlem türü 'update' ise
        // Güncellemeyi yap
        this.socialMediaService.update({ ...this.socialMedia, ...socialMediaData }).subscribe(
          response => {
            console.log('Başarıyla güncellendi', response);
            this.formSaved.emit(); // Form güncellendiğinde modal kapatır
          },
          error => {
            console.error('Güncelleme hatası:', error);
          }
        );
      }
    } else {
      console.log('Form geçersiz');
    }
  }

  onCancelClick() {
    console.log('Vazgeç butonuna tıklandı!');
    this.formCancelled.emit();
  }

}

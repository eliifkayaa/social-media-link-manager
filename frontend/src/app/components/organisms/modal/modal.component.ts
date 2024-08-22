import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SocialMediaService } from '../../../commons/services/social-media.service';
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit {

  constructor(private socialMediaService: SocialMediaService) {}


  @Input() isVisible: boolean = false;
  @Output() modalClose = new EventEmitter<void>();

  socialMedia: SocialMediaModel = new SocialMediaModel();

  ngOnInit(): void { }

  closeModal() {
    this.isVisible = false;
    this.modalClose.emit();// Modal'in kapandığını parent bileşene bildirir.
  }

  onFormSaved() {
  this.socialMediaService.addSocialMedia(this.socialMedia).subscribe(
    () => {
      console.log("Kaydedildi");
      this.closeModal();
    })
  }

}

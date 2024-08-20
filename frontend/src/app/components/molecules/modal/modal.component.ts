import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroupComponent } from '../form-group/form-group.component';
import { SocialMediaService } from '../../../commons/services/social-media.service';
import { SharedModule } from '../../../commons/modules/shared/shared.module';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [FormGroupComponent, SharedModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit {

  ngOnInit(): void {
   
  }
  @Input() isVisible: boolean = false;
  @Output() modalClose = new EventEmitter<void>();

  socialMedia: any = {
    link: '',
    name: '',
    description: ''
  };

  constructor(private socialMediaService: SocialMediaService) {}

 

  closeModal() {
    this.isVisible = false;
    this.modalClose.emit();
  }
  saveSocialMedia() {
    this.socialMediaService.addSocialMedia(this.socialMedia).subscribe(response => {
      console.log('Sosyal medya hesabı kaydedildi:', response);
      this.closeModal();
    }, error => {
      console.error('Hata:', error);
    });
  }
}

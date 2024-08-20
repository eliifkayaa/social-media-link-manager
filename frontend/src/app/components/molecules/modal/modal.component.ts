import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroupComponent } from '../form-group/form-group.component';
import { SocialMediaService } from '../../../commons/services/social-media.service';
import { SharedModule } from '../../../commons/modules/shared/shared.module';
import { SocialMediaModel } from '../../../commons/model/socialMedia.model';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [FormGroupComponent, SharedModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit {

  constructor(private socialMediaService: SocialMediaService) {}


  @Input() isVisible: boolean = false;
  @Output() modalClose = new EventEmitter<void>();

  socialMedia: SocialMediaModel = new SocialMediaModel();

  ngOnInit(): void { }

  closeModal() {
    this.isVisible = false;
  }

  onFormSaved() {
    this.closeModal();
  }

  onFormCancelled() {
    this.closeModal();
  }
}

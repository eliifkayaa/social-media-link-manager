import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../commons/modules/shared/shared.module';
import { FilterPipe } from '../../../commons/pipes/filter.pipe';
import { TextComponent } from '../../atoms/text/text.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { SocialMediaService } from '../../../commons/services/social-media.service';
import { IconComponent } from '../../atoms/icon/icon.component';
import { SearchComponent } from '../../atoms/search/search.component';
import { ButtonsComponent } from '../../atoms/buttons/buttons.component';
import { ModalComponent } from '../modal/modal.component';
import { SocialMediaModel } from '../../../commons/model/socialMedia.model';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    SharedModule,
    TextComponent,
    PaginationComponent,
    FilterPipe,
    IconComponent,
    SearchComponent,
    ButtonsComponent,
    ModalComponent,
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  socials: SocialMediaModel[] = [];
  search: string = '';
  isModalVisible: boolean = false;
  modalAction: 'save' | 'update' = 'save';  
  selectedSocial: SocialMediaModel = new SocialMediaModel();

  constructor(private _socialMedia: SocialMediaService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this._socialMedia.getAll().subscribe(
      (data: SocialMediaModel[]) => {
        this.socials = data;
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }

  remove(social: SocialMediaModel): void {
    if (confirm('Bu kaydı silmek istediğinizden emin misiniz?')) {
      this._socialMedia.remove(social._id).subscribe(
        () => {
          this.socials = this.socials.filter(item => item._id !== social._id);
        },
        (error) => {
          console.error('Error', error);
        }
      );
    }
  }

  //Modal dialog
  openModal(action: 'save' | 'update', social?: SocialMediaModel): void {
    this.modalAction = action;
    if (action === 'update' && social) {
      this.selectedSocial = { ...social };  // Güncellenmiş sosyal medya verilerini seç
    } else {
      this.selectedSocial = new SocialMediaModel();  // Yeni ekleme için resetle
    }
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
    console.log('Modal kapatıldı:', this.isModalVisible);
  }

  onFormSaved(): void {
    this.getAll();  
    this.closeModal();
  }
}

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
  socials: any[] = [];
  search: string = '';
  isModalVisible: boolean = false;

  constructor(private socialMediaService: SocialMediaService) {}

  ngOnInit(): void {
    this.loadSocials();
  }

  loadSocials(): void {
    this.socialMediaService.getAllSocialMedia().subscribe(
      (data: any[]) => {
        this.socials = data;
      },
      (error) => {
        console.error('Error fetching social media data', error);
      }
    );
  }

  get(social: any): void {
    // Güncelleme işlemleri için gerekli işlev
  }

  removeById(social: any): void {
    this.socialMediaService.removeSocialMedia(social._id).subscribe(
      () => {
        this.loadSocials(); // Veriyi güncelledikten sonra yeniden yükle
      },
      (error) => {
        console.error('Error removing social media', error);
      }
    );
  }

  openModal() {
    this.isModalVisible = true;
    console.log('Modal açıldı:', this.isModalVisible);
  }

  closeModal() {
    this.isModalVisible = false;
    console.log('Modal kapatıldı:', this.isModalVisible);
  }
}

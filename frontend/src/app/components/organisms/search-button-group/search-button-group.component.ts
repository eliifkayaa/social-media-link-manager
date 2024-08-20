import { Component } from '@angular/core';
import { SearchComponent } from '../../atoms/search/search.component';
import { IconComponent } from '../../atoms/icon/icon.component';
import { ButtonsComponent } from '../../atoms/buttons/buttons.component';
import { SharedModule } from '../../../commons/modules/shared/shared.module';
import { FormGroupComponent } from '../../molecules/form-group/form-group.component';
import { ModalComponent } from '../../molecules/modal/modal.component';
@Component({
  selector: 'app-search-button-group',
  standalone: true,
  imports: [SharedModule,SearchComponent, IconComponent, ButtonsComponent, FormGroupComponent, ModalComponent],
  templateUrl: './search-button-group.component.html',
  styleUrl: './search-button-group.component.scss'
})
export class SearchButtonGroupComponent {
  constructor() {}
  isModalVisible: boolean = false;

  openModal() {
    this.isModalVisible = true;
    console.log('Modal açıldı:', this.isModalVisible);
  }

  closeModal() {
    this.isModalVisible = false;
    console.log('Modal kapatıldı:', this.isModalVisible);
  }
}


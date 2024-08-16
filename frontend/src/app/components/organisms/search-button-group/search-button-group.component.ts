import { Component } from '@angular/core';
import { SearchComponent } from '../../atoms/search/search.component';
import { IconComponent } from '../../atoms/icon/icon.component';
import { ButtonsComponent } from '../../atoms/buttons/buttons.component';

@Component({
  selector: 'app-search-button-group',
  standalone: true,
  imports: [SearchComponent, IconComponent, ButtonsComponent],
  templateUrl: './search-button-group.component.html',
  styleUrl: './search-button-group.component.scss'
})
export class SearchButtonGroupComponent {

  onAddClick() {
    console.log('onAddClick');
  }
}

import { Component } from '@angular/core';
import { SearchComponent } from '../../atoms/search/search.component';
import { IconComponent } from '../../atoms/icon/icon.component';
import { SearchButtonGroupComponent } from '../search-button-group/search-button-group.component';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [SearchComponent, IconComponent, SearchButtonGroupComponent, TableComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {

}

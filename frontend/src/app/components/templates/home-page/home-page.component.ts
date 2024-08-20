import { Component } from '@angular/core';
import { SharedModule } from '../../../commons/modules/shared/shared.module';
import { OrganismsNavbarComponent } from '../../organisms/organisms-navbar/organisms-navbar.navbar.component';
import { SearchButtonGroupComponent } from '../../organisms/search-button-group/search-button-group.component';
import { TableComponent } from '../../organisms/table/table.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SharedModule, OrganismsNavbarComponent, SearchButtonGroupComponent, TableComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}

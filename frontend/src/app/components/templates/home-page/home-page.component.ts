import { Component } from '@angular/core';
import { SharedModule } from '../../../commons/modules/shared/shared.module';
import { TableComponent } from '../../organisms/table/table.component';
import { NavbarFormComponent } from '../../organisms/navbar-form/navbar-form.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SharedModule, NavbarFormComponent, TableComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}

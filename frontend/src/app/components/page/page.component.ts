import { Component } from '@angular/core';
import { HomePageComponent } from '../templates/home-page/home-page.component';
import { SharedModule } from '../../commons/modules/shared/shared.module';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [HomePageComponent, SharedModule],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {

}

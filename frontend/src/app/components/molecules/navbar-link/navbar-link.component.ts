import { Component } from '@angular/core';
import { HeadingComponent } from '../../atoms/heading/heading.component';

@Component({
  selector: 'app-navbar-link',
  standalone: true,
  imports: [HeadingComponent],
  templateUrl: './navbar-link.component.html',
  styleUrl: './navbar-link.component.scss'
})
export class NavbarLinkComponent {

}

import { Component } from '@angular/core';
import { NavbarLinkComponent } from '../../molecules/navbar-link/navbar-link.component';
import { IconComponent } from '../../atoms/icon/icon.component';
import { SocialIconGroupComponent } from '../../molecules/social-icon-group/social-icon-group.component';
import { LogoComponent } from '../../molecules/logo/logo.component';

@Component({
  selector: 'app-organisms-navbar',
  standalone: true,
  imports: [NavbarLinkComponent, SocialIconGroupComponent, LogoComponent],
  templateUrl: './organisms-navbar.component.html',
  styleUrl: './organisms-navbar.component.scss'
})
export class OrganismsNavbarComponent {

}

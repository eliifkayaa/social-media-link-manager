import { Component } from '@angular/core';
import { NavbarLinkComponent } from '../../molecules/navbar-link/navbar-link.component';
import { IconComponent } from '../../atoms/icon/icon.component';
import { SocialIconGroupComponent } from '../../molecules/social-icon-group/social-icon-group.component';
import { LogoComponent } from '../../molecules/logo/logo.component';

@Component({
  selector: 'app-navbar-form',
  standalone: true,
  imports: [NavbarLinkComponent, SocialIconGroupComponent, LogoComponent],
  templateUrl: './navbar-form.component.html',
  styleUrl: './navbar-form.component.scss'
})
export class NavbarFormComponent {

}

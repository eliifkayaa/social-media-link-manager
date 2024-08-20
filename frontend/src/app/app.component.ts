import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonsComponent } from './components/atoms/buttons/buttons.component';
import { InputFieldComponent } from './components/atoms/input-field/input-field.component';
import { IconComponent } from './components/atoms/icon/icon.component';
import { TextComponent } from './components/atoms/text/text.component';
import { HeadingComponent } from './components/atoms/heading/heading.component';
import { SearchComponent } from './components/atoms/search/search.component';
import { FormGroupComponent } from './components/molecules/form-group/form-group.component';
import { NavbarLinkComponent } from './components/molecules/navbar-link/navbar-link.component';
import { OrganismsNavbarComponent } from './components/organisms/organisms-navbar/organisms-navbar.navbar.component';
import { PageComponent } from './components/page/page.component';
import { SharedModule } from './commons/modules/shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageComponent, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';

  onSaveClick() {
    console.log('Kaydet butonuna tıklandı!');
    
  }
  
  onCancelClick() {
    console.log('Vazgeç butonuna tıklandı!');
   
  }

  onAddClick() {
    console.log('Ekleme butonuna tıklandı!');
   
  }
}

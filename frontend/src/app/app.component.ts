import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonsComponent } from './components/atoms/buttons/buttons.component';
import { InputFieldComponent } from './components/atoms/input-field/input-field.component';
import { IconComponent } from './components/atoms/icon/icon.component';
import { TextComponent } from './components/atoms/text/text.component';
import { HeadingComponent } from './components/atoms/heading/heading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonsComponent, InputFieldComponent, IconComponent, TextComponent, HeadingComponent],
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

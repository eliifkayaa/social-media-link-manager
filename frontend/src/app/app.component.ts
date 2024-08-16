import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonsComponent } from './components/atoms/buttons/buttons.component';
import { InputFieldComponent } from './components/atoms/input-field/input-field.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonsComponent, InputFieldComponent],
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

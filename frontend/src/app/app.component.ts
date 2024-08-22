import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

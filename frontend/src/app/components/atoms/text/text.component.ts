import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../commons/modules/shared/shared.module';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss'
})
export class TextComponent {

  @Input() text: string = '';
  @Input() class: string = '';

}

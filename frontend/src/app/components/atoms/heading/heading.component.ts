import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../commons/modules/shared/shared.module';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss'
})
export class HeadingComponent {

  @Input() class: string = '';
  @Input() text: string = '';

}

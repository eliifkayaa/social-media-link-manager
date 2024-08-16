import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedModule } from '../../../commons/modules/shared/shared.module';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  @Input() type : string = ''
  @Input() placeholder : string = ''
  @Input() iconClass : string =''

  @Output() iconClick = new EventEmitter<void>();
  
  handleClick() {
    this.iconClick.emit()
  }
}

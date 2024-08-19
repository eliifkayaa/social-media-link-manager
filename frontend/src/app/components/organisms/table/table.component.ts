import { Component } from '@angular/core';
import { SharedModule } from '../../../commons/modules/shared/shared.module';
import { TextComponent } from '../../atoms/text/text.component';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [SharedModule, TextComponent, PaginationComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

 

}

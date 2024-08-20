import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../commons/modules/shared/shared.module';
import { FilterPipe } from '../../../commons/pipes/filter.pipe';
import { TextComponent } from '../../atoms/text/text.component';
import { PaginationComponent } from '../pagination/pagination.component';
declare const $: any;

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [SharedModule, TextComponent, PaginationComponent, FilterPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit{
  ngOnInit(): void {
   
  }



}

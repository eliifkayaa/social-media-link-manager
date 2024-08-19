import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements AfterViewInit{

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator;
  }

}

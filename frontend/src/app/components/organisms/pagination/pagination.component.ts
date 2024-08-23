import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SharedModule } from '../../../commons/modules/shared/shared.module';
import { TextComponent } from '../../atoms/text/text.component';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [SharedModule, TextComponent],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit{

  @Input() currentPage: number = 1;
  @Input() totalItems: number = 0;
  @Input() rowsPerPage: number = 7; // Varsayılan 7 satır
  @Input() rowsOptions: number[] = [7, 4, 8, 12, 16];

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() rowsPerPageChange: EventEmitter<number> = new EventEmitter<number>();

  totalPages: number = 1;
  ngOnInit(): void {
    this.calculateTotalPages();
  }

  ngOnChanges() {
    this.calculateTotalPages();
  }

  onRowsChange() {
    this.currentPage = 1; // Reset to first page when rows per page changes
    this.rowsPerPageChange.emit(this.rowsPerPage); // Satır sayısını üst bileşene ilet
    this.calculateTotalPages();
  }

  calculateTotalPages() {
    this.totalPages = Math.ceil(this.totalItems / this.rowsPerPage);
    if (this.currentPage > this.totalPages && this.totalPages > 0) {
      this.changePage(this.totalPages);
    }
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageChange.emit(this.currentPage);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.changePage(this.currentPage + 1);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.changePage(this.currentPage - 1);
    }
  }
}
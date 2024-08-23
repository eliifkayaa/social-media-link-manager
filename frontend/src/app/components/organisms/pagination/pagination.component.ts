import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../commons/modules/shared/shared.module';
import { TextComponent } from '../../atoms/text/text.component';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [SharedModule, TextComponent],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {

  currentPage = 1;
  totalPages = 4;  // Total number of pages
  rowsPerPage = 4;
  rowsOptions = [4, 8, 12, 16];

  onRowsChange() {
    this.currentPage = 1; // Reset to first page when rows per page changes
    this.calculateTotalPages();
  }

  calculateTotalPages() {
    // Assuming you have a method to calculate the total number of pages based on rows per page.
    // This can be done based on total number of items.
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}


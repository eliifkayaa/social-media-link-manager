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

  @Input() currentPage: number = 1;  // Mevcut sayfa numarası, varsayılan 1
  @Input() totalItems: number = 0;// Toplam öğe sayısı
  @Input() rowsPerPage: number = 7; // Her sayfada gösterilen satır sayısı, varsayılan 7
  @Input() rowsOptions: number[] = [7, 4, 8, 12, 16]; // Kullanıcının seçebileceği satır sayısı seçenekleri

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>(); // Sayfa değiştiğinde
  @Output() rowsPerPageChange: EventEmitter<number> = new EventEmitter<number>(); // Satır sayısı değiştiğinde

  totalPages: number = 1; // Toplam sayfa sayısı
  ngOnInit(): void {
    this.calculateTotalPages(); // Bileşen ilk yüklendiğinde toplam sayfa sayısını hesaplar
  }

  ngOnChanges() {
    this.calculateTotalPages(); // Girdi değişikliklerinde toplam sayfa sayısını tekrar hesaplar
  }

  onRowsChange() {
    this.currentPage = 1; // Satır sayısı değiştiğinde sayfayı birinci sayfaya sıfırla
    this.rowsPerPageChange.emit(this.rowsPerPage);  // Yeni satır sayısını üst bileşene ilet
    this.calculateTotalPages(); // Toplam sayfa sayısını tekrar hesapla
  }

  calculateTotalPages() {
    this.totalPages = Math.ceil(this.totalItems / this.rowsPerPage); // Toplam sayfa sayısını hesapla
    if (this.currentPage > this.totalPages && this.totalPages > 0) {
      this.changePage(this.totalPages); // Mevcut sayfa toplam sayfa sayısından büyükse son sayfaya git
    }
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) { // Sayfa geçerli bir sayfa numarasıysa
      this.currentPage = page; // Mevcut sayfayı değiştir
      this.pageChange.emit(this.currentPage); // Yeni sayfa numarasını üst bileşene ilet
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) { // Mevcut sayfa toplam sayfadan küçükse
      this.changePage(this.currentPage + 1); // Sonraki sayfaya git
    }
  }

  previousPage() {
    if (this.currentPage > 1) { // Mevcut sayfa birden büyükse
      this.changePage(this.currentPage - 1); // Önceki sayfaya git
    }
  }
}
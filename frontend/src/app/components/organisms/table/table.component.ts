import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../commons/modules/shared/shared.module';
import { FilterPipe } from '../../../commons/pipes/filter.pipe';
import { TextComponent } from '../../atoms/text/text.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { SocialMediaService } from '../../../commons/services/social-media.service';
import { IconComponent } from '../../atoms/icon/icon.component';
import { SearchComponent } from '../../atoms/search/search.component';
import { ButtonsComponent } from '../../atoms/buttons/buttons.component';
import { ModalComponent } from '../modal/modal.component';
import { SocialMediaModel } from '../../../commons/model/socialMedia.model';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    SharedModule,
    TextComponent,
    PaginationComponent,
    FilterPipe,
    IconComponent,
    SearchComponent,
    ButtonsComponent,
    ModalComponent
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  socials: SocialMediaModel[] = []; // Sosyal medya verileri
  search: string = ''; // Arama terimi
  isModalVisible: boolean = false; // Modal görünürlük durumu
  modalAction: 'save' | 'update' = 'save'; // Modalda yapılacak işlem: kaydetme veya güncelleme
  selectedSocial: SocialMediaModel = new SocialMediaModel(); // Seçilen sosyal medya verisi

  // Pagination değişkenleri
  currentPage: number = 1; // Mevcut sayfa
  rowsPerPage: number = 7; // Her sayfada gösterilen satır sayısı, varsayılan 7
  rowsOptions: number[] = [7, 4, 8, 12, 16]; // Kullanıcının seçebileceği satır sayısı seçenekleri
  totalItems: number = 0; // Toplam öğe sayısı
  displayedSocials: SocialMediaModel[] = []; // Sayfalama için gösterilen sosyal medya verileri

  constructor(private _socialMedia: SocialMediaService) {}

  ngOnInit(): void {
    this.loadFromLocalStorage(); // LocalStorage'dan veriyi yükler
    this.getAll(); // Sosyal medya verilerini getirir
  }
  getAll(): void {
    this._socialMedia.getAll().subscribe(
      (data: SocialMediaModel[]) => {
        this.socials = data; // Veriyi sosyal medya dizisine atar
        this.saveToLocalStorage(); // LocalStorage'a kaydet

        //pagination
        this.totalItems = data.length; // Toplam öğe sayısını günceller
        this.updateDisplayedSocials(); // Gösterilen sosyal medya verilerini günceller
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }

  remove(social: SocialMediaModel): void {
    if (confirm('Bu kaydı silmek istediğinizden emin misiniz?')) {
      this._socialMedia.remove(social._id).subscribe(
        () => {
          this.socials = this.socials.filter((item) => item._id !== social._id);  // Silinen öğeyi listeden çıkarırr
          this.updateDisplayedSocials(); // Gösterilen sosyal medya verilerini günceller
        },
        (error) => {
          console.error('Error', error);
        }
      );
    }
  }

  // Modal dialog işlemleri
  openModal(action: 'save' | 'update', social?: SocialMediaModel): void {
    this.modalAction = action; // Modalda yapılacak işlemi ayarlar
    if (action === 'update' && social) {
      this.selectedSocial = { ...social }; // Güncellenmiş sosyal medya verilerini seçer
    } else {
      this.selectedSocial = new SocialMediaModel(); // Yeni ekleme için sosyal medya modelini sıfırlar
    }
    this.isModalVisible = true; // Modali görünür yapar
  }

  closeModal() {
    this.isModalVisible = false; // Modali kapalı yapar
    console.log('Modal kapatıldı:', this.isModalVisible); // Modal kapatıldığını konsola yazar
  }

  onFormSaved(): void {
    this.getAll(); // Form kaydedildiğinde verileri yeniden getirir
    this.closeModal(); // Modali kapatır
  }

  updateDisplayedSocials(): void {
    const startIndex = (this.currentPage - 1) * this.rowsPerPage; // Sayfanın başlangıç indeksi (2 - 1) * 7 = 7
    const endIndex = startIndex + this.rowsPerPage; // Sayfanın bitiş indeksi 7 + 7 = 14,  1. sayfa (0-6)
    const filteredSocials = this.socials.filter(
      (social) =>
        social.name.toLowerCase().includes(this.search.toLowerCase()) || // Arama terimiyle eşleşen sosyal medya adı
        social.link.toLowerCase().includes(this.search.toLowerCase()) || // Arama terimiyle eşleşen sosyal medya linki
        social.description.toLowerCase().includes(this.search.toLowerCase()) // Arama terimiyle eşleşen sosyal medya açıklaması
    );
    this.totalItems = filteredSocials.length; // Filtrelenmiş öğe sayısını günceller
    this.displayedSocials = filteredSocials.slice(startIndex, endIndex); // Gösterilen sosyal medya verilerini ayarlar
  }
  onPageChange(page: number): void {
    this.currentPage = page; // Mevcut sayfayı günceller
    this.updateDisplayedSocials(); // Gösterilen sosyal medya verilerini günceller
  }

  onRowsPerPageChange(rows: number): void {
    this.rowsPerPage = rows; // Her sayfada gösterilen satır sayısını günceller
    this.currentPage = 1; // Sayfayı birinci sayfaya sıfırlar
    this.updateDisplayedSocials(); // Gösterilen sosyal medya verilerini günceller
  }

  onSearchChange(): void {
    this.currentPage = 1; // Arama değiştiğinde sayfayı birinci sayfaya sıfırlar
    this.updateDisplayedSocials(); // Gösterilen sosyal medya verilerini günceller
  }

  saveToLocalStorage(): void {
    localStorage.setItem('socialLinks', JSON.stringify(this.socials)); // Sosyal medya verilerini LocalStorage'a kaydeder
  }
  
  loadFromLocalStorage(): void {
    const data = localStorage.getItem('socialLinks'); // LocalStorage'dan veri alır
    if (data) {
      this.socials = JSON.parse(data); // Veriyi parse eder ve sosyal medya dizisine atar
      this.updateDisplayedSocials(); // Gösterilen sosyal medya verilerini günceller
    }
  }
}

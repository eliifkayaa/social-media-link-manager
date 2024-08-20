import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; // Modal için ng-bootstrap
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedModule } from '../../../commons/modules/shared/shared.module';
import { FilterPipe } from '../../../commons/pipes/filter.pipe';
import { TextComponent } from '../../atoms/text/text.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { SocialMediaService } from '../../../commons/services/social-media.service';
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
    throw new Error('Method not implemented.');
  }



}

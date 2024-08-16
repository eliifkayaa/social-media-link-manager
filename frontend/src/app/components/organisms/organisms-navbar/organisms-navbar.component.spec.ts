import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismsNavbarComponent } from './organisms-navbar.navbar.component';

describe('OrganismsNavbarComponent', () => {
  let component: OrganismsNavbarComponent;
  let fixture: ComponentFixture<OrganismsNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganismsNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganismsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchButtonGroupComponent } from './search-button-group.component';

describe('SearchButtonGroupComponent', () => {
  let component: SearchButtonGroupComponent;
  let fixture: ComponentFixture<SearchButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchButtonGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

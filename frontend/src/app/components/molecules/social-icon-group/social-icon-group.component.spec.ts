import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialIconGroupComponent } from './social-icon-group.component';

describe('SocialIconGroupComponent', () => {
  let component: SocialIconGroupComponent;
  let fixture: ComponentFixture<SocialIconGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialIconGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialIconGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

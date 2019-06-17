import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBannerComponent } from './page-banner.component';
import { CallToActionComponent } from '../call-to-action/call-to-action.component';

describe('PageBannerComponent', () => {
  let component: PageBannerComponent;
  let fixture: ComponentFixture<PageBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageBannerComponent, CallToActionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

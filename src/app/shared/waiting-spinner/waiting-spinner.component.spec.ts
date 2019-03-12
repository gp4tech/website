import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingSpinnerComponent } from './waiting-spinner.component';

describe('WaitingSpinnerComponent', () => {
  let component: WaitingSpinnerComponent;
  let fixture: ComponentFixture<WaitingSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { SubscribeFormComponent } from './subscribe-form.component';
import { SharedModule } from '../../shared/shared.module';

describe('SubscribeFormComponent', () => {
  let component: SubscribeFormComponent;
  let fixture: ComponentFixture<SubscribeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        TranslateModule.forRoot(),
        SharedModule
      ],
      declarations: [ SubscribeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

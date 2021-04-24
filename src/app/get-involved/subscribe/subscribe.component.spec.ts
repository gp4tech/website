import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { TranslateModule } from '@ngx-translate/core';

import { SubscribeComponent } from './subscribe.component';
import { SubscribeFormComponent } from '../subscribe-form/subscribe-form.component';
import { SharedModule } from '../../shared/shared.module';
import { SupporterService } from '../supporter.service';

describe('SubscribeComponent', () => {
  let component: SubscribeComponent;
  let fixture: ComponentFixture<SubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        SharedModule,
        TranslateModule.forRoot(),
        RouterTestingModule,
      ],
      declarations: [SubscribeComponent, SubscribeFormComponent],
      providers: [
        {
          provide: SupporterService,
          useValue: {},
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

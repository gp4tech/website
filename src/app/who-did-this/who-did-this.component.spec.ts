import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { WhoDidThisComponent } from './who-did-this.component';
import { WebTeamMembersService } from './web-team-members.service';

const WebTeamMembersServiceMock = {
  getAll: () => of([])
};

describe('WhoDidThisComponent', () => {
  let component: WhoDidThisComponent;
  let fixture: ComponentFixture<WhoDidThisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      declarations: [ WhoDidThisComponent ],
      providers: [
        { provide: WebTeamMembersService, useValue: WebTeamMembersServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoDidThisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

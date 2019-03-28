import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader
} from '@ngx-translate/core';
import { of } from 'rxjs';

import { TopBlogsComponent } from './top-blogs.component';
import { BlogsService } from 'src/app/shared/blogs/blogs.service';

const blogsServiceMock = {
  getAllSorted: () => of([])
};

describe('TopBlogsComponent', () => {
  let component: TopBlogsComponent;
  let fixture: ComponentFixture<TopBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopBlogsComponent],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        })
      ],
      providers: [{ provide: BlogsService, useValue: blogsServiceMock }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader
} from '@ngx-translate/core';
import { of } from 'rxjs';

import { TopArticlesComponent } from './top-articles.component';
import { ArticlesService } from 'src/app/blog/articles.service';

const blogsServiceMock = {
  getAllSorted: () => of([])
};

describe('TopArticlesComponent', () => {
  let component: TopArticlesComponent;
  let fixture: ComponentFixture<TopArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopArticlesComponent],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        })
      ],
      providers: [{ provide: ArticlesService, useValue: blogsServiceMock }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

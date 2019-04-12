import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';

import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader
} from '@ngx-translate/core';

import { TopArticleComponent } from './top-article.component';
import { ArticlesService } from '../../articles.service';
import { Article } from '../../../shared/models/article.model';

const angularFirestoreMock = {
  collection: () => {}
};

describe('TopArticleComponent', () => {
  @Component({
    selector: 'gp-top-article-wrapper',
    template: '<gp-top-article [article]="article"></gp-top-article>'
  })
  class TopArticleWrapperComponent {
    article: Article = {
      id: '',
      url: ''
    };
  }

  let component: TopArticleWrapperComponent;
  let fixture: ComponentFixture<TopArticleWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopArticleWrapperComponent, TopArticleComponent],
      imports: [
        HttpClientModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        })
      ],
      providers: [
        ArticlesService,
        { provide: AngularFirestore, useValue: angularFirestoreMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopArticleWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

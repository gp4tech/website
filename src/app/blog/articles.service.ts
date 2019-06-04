import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Article } from '../shared/models/article.model';
import { DataService } from '../shared/models/data-service.model';
import { FirebaseCollections } from '../shared/models/collections.constant';
import { CloudFunctions } from '../shared/models/cloud-functions.constant';
import { DataOrder } from '../shared/models/data-type.model';

const DEFAULT_TEXT = 'GP4Tech';
const DEFAULT_IMAGE = 'assets/images/GP4Tech-logo.png';

@Injectable()
export class ArticlesService extends DataService<Article> {
  defaultText = DEFAULT_TEXT;
  defaultImage = DEFAULT_IMAGE;

  constructor(http: HttpClient, db: AngularFirestore) {
    super(http, db, FirebaseCollections.articles);
  }

  getAllArticles(): Observable<Article[]> {
    return this.getAll().pipe(
      map(articles => {
        this.verifyArticlesAndUpdateMetadata(articles);
        return articles;
      })
    );
  }

  getTopArticles(quantity: number): Observable<Article[]> {
    return this.getAllSorted('views', DataOrder.desc, quantity).pipe(
      map(articles => {
        this.verifyArticlesAndUpdateMetadata(articles);
        return articles;
      })
    );
  }

  private isArticleIncomplete(article: Article): boolean {
    return !article.title || !article.description || !article.image;
  }

  private verifyArticlesAndUpdateMetadata(articles: Article[]): void {
    articles.forEach(article => {
      if (this.isArticleIncomplete(article)) {
        this.updateUsingCloudFunction(
          article.id,
          CloudFunctions.updateArticleMetadata
        ).subscribe();
      }
    });
  }
}

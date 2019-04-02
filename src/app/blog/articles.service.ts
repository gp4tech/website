import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Article } from '../shared/models/article.model';
import { DataService } from '../shared/models/data-service.model';
import { FirebaseCollections } from '../shared/models/collections.constant';
import { CloudFunctions } from '../shared/models/cloud-functions.constant';

const DEFAULT_IMAGE = 'assets/images/GP4Tech-logo.png';

@Injectable()
export class ArticlesService extends DataService<Article> {
  defaultBlogImage = DEFAULT_IMAGE;

  constructor(http: HttpClient, db: AngularFirestore) {
    super(http, db, FirebaseCollections.articles);
  }

  getAllBlogs(): Observable<Article[]> {
    return this.getAll().pipe(
      map(blogs => {
        this.verifyBlogsAndUpdateMetadata(blogs);
        return blogs;
      })
    );
  }

  private isBlogIncomplete(blog: Article): boolean {
    return !blog.title || !blog.description || !blog.image;
  }

  private verifyBlogsAndUpdateMetadata(blogs: Article[]): void {
    blogs.forEach(blog => {
      if (this.isBlogIncomplete(blog)) {
        this.updateUsingCloudFunction(
          blog.id,
          CloudFunctions.updateBlogMetadata
        ).subscribe();
      }
    });
  }
}

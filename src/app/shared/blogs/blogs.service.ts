import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Blog } from '../models/blog.model';
import { DataService } from '../data-service/data.service';
import { FirebaseCollections } from '../data-service/collections';
import { CloudFunctions } from '../data-service/cloud-functions';

const MAX_TOP_BLOGS_LENGTH = 3;
const DEFAULT_IMAGE = 'assets/images/GP4Tech-logo.png';

@Injectable()
export class BlogsService extends DataService<Blog> {
  defaultBlogImage = DEFAULT_IMAGE;

  constructor(http: HttpClient, db: AngularFirestore) {
    super(http, db, FirebaseCollections.blogs);
  }

  getAllBlogs(): Observable<Blog[]> {
    return this.getAll().pipe(
      map(blogs => {
        this.verifyBlogsAndUpdateMetadata(blogs);
        return blogs;
      })
    );
  }

  getTopBlogs(): Observable<Blog[]> {
    return this.angularFirestoreService
      .collection<Blog>(this.collectionName, ref =>
        ref.orderBy('views', 'desc').limit(MAX_TOP_BLOGS_LENGTH)
      )
      .valueChanges()
      .pipe(
        map(blogs => {
          this.verifyBlogsAndUpdateMetadata(blogs);
          return blogs;
        })
      );
  }

  private isBlogIncomplete(blog: Blog): boolean {
    return !blog.title || !blog.description || !blog.image;
  }

  private verifyBlogsAndUpdateMetadata(blogs: Blog[]): void {
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

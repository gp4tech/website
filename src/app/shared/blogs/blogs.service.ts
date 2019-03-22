import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Blog } from '../models/blog.model';
import { DataService } from '../data-service/data.service';
import { FirebaseCollections } from '../data-service/collections';
import { CloudFunctions } from '../data-service/cloud-functions';
import { environment } from 'src/environments/environment';

const MAX_TOP_BLOGS_LENGTH = 3;
const DEFAULT_IMAGE = 'assets/images/GP4Tech-logo.png';

@Injectable()
export class BlogsService extends DataService<Blog> {
  collectionName = FirebaseCollections.blogs;
  defaultBlogImage = DEFAULT_IMAGE;

  constructor(private db: AngularFirestore, private http: HttpClient) {
    super(db, FirebaseCollections.blogs);
  }

  getTopBlogs() {
    return this.db
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

  getBlogsWithMetadata(): Observable<Blog[]> {
    return this.getAll().pipe(
      map(blogs => {
        this.verifyBlogsAndUpdateMetadata(blogs);
        return blogs;
      })
    );
  }

  updateBlogOnServer(blog: Blog, functionName: string): Observable<any> {
    return this.http.post(`${environment.functionsUrl}/${functionName}`, blog);
  }

  updateBlogMetadata(blog: Blog): Observable<any> {
    return this.http.post(
      `${environment.functionsUrl}/${CloudFunctions.updateBlogMetadata}`,
      blog
    );
  }

  updateBlogViews(blog: Blog): Observable<any> {
    return this.http.post(
      `${environment.functionsUrl}/${CloudFunctions.updateBlogViews}`,
      blog
    );
  }

  private isBlogIncomplete(blog: Blog): boolean {
    return !blog.title || !blog.description || !blog.image;
  }

  private verifyBlogsAndUpdateMetadata(blogs: Blog[]) {
    blogs.forEach(blog => {
      if (this.isBlogIncomplete(blog)) {
        this.updateBlogOnServer(
          blog,
          CloudFunctions.updateBlogMetadata
        ).subscribe();
      }
    });
  }
}

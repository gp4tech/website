import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Blog } from '../models/blog.model';
import { DataService } from '../data-service/data.service';
import { FirebaseCollections } from '../data-service/collections';
import { environment } from 'src/environments/environment';

@Injectable()
export class BlogsService extends DataService<Blog> {
  collectionName = FirebaseCollections.blogs;

  constructor(private db: AngularFirestore, private http: HttpClient) {
    super(db, FirebaseCollections.blogs);
  }

  getTopBlogs() {
    return this.db
      .collection<Blog>(this.collectionName, ref =>
        ref.orderBy('views', 'desc')
      )
      .valueChanges()
      .pipe(
        map(blogs => {
          if (blogs.length > 3) {
            blogs.length = 3;
          }
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

  updateBlogMetadata(blog: Blog): Observable<any> {
    return this.http.post(
      `${environment.functionsUrl}/updateBlogMetadata`,
      blog
    );
  }

  updateBlogViews(blog: Blog): Observable<any> {
    const views = blog.views;
    blog.views = views ? views + 1 : 1;
    return this.http.post(`${environment.functionsUrl}/updateBlog`, blog);
  }

  private isBlogIncomplete(blog: Blog): boolean {
    return !blog.title || !blog.description || !blog.image;
  }

  private verifyBlogsAndUpdateMetadata(blogs: Blog[]) {
    blogs.forEach(blog => {
      if (this.isBlogIncomplete(blog)) {
        this.updateBlogMetadata(blog).subscribe();
      }
    });
  }
}

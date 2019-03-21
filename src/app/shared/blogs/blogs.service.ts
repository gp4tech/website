import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { Blog } from '../models/blog.model';
import { DataService } from '../data-service/data.service';
import { FirebaseCollections } from '../data-service/collections';
import { environment } from 'src/environments/environment';

@Injectable()
export class BlogsService extends DataService<Blog> {
  constructor(db: AngularFirestore, private http: HttpClient) {
    super(db, FirebaseCollections.blogs);
  }

  updateBlogMetadata(blog: Blog): Observable<any> {
    return this.http.post(
      `${environment.functionsUrl}/updateBlogMetadata`,
      blog
    );
  }
}

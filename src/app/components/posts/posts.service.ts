import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
  posts: any;
  getPostsUrl = 'assets/posts.json';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(this.getPostsUrl, { observe: 'response' }).pipe(
      map((res: HttpResponse<Object>) => {
        //   res.ok;
        // this.posts = res;
        console.log(res);
        // return this.posts;
        return res.body;
      })
    );
  }
}

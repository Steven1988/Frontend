import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class RandomDataService {
  users: any[];
  user: any;
  getUsersUrl = 'https://jsonplaceholder.typicode.com/users';
  // data: any[];
  constructor(private http: HttpClient) {}

  getRandomData() {
    // console.log('RDS hit')
    return this.http.get(this.getUsersUrl, { observe: 'response' }).pipe(
      map((res: any) => {
        this.users = res.body;
        console.log(res);

        return this.users;
      })
    );
  }

  getUser(id: string) {
    // console.log(id);

    return this.http.get(this.getUsersUrl + '/' + id, { observe: 'response' }).pipe(
      map((res: any) => {
        this.user = res.body;
        return this.user;
      })
    );
    // return this.getRandomData().map((users: any) => users.find((u: any) => {
    // 	u.id === id;
    // 	console.log(id);

    // }));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class TagsService {
    tagsUrl = 'http://localhost:5000/api/tags';

    constructor(private http: HttpClient) {}

    getTags(): Observable<any> {
        return this.http.get(this.tagsUrl, { observe: 'response' }).pipe(
            map((res: HttpResponse<Object>) => {
                // tslint:disable-next-line: no-unused-expression
                res.ok;
                // console.log(res);
                return res.body;
            })
        );
    }
}

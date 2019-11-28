import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DbUser } from '../state/state';

@Injectable()

export class UsersService {

    usersUrl = 'http://localhost:5000/api/users';

    constructor(private http: HttpClient) { }

    getUsers(): Observable<any> {
        return this.http.get(this.usersUrl, { observe : 'response'}).pipe(
            map((res: HttpResponse<Object>) => {
                // tslint:disable-next-line: no-unused-expression
                res.ok;
                console.log(res);
                return res.body;
            })
        );
    }

    getSingleUser(id: string): Observable<any> {
        return this.http.get(this.usersUrl + '/' + id, { observe: 'response' }).pipe(
            map((resp: HttpResponse<any>) => {
                // tslint:disable-next-line: no-unused-expression
                resp.ok;
                console.log(resp);
                return resp.body;
            })
        );
    }
}

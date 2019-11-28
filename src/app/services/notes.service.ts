import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Note } from '../state/state';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
@Injectable()
export class NotesService {
  notesUrl = 'http://localhost:5000/api/notes';

  constructor(private http: HttpClient) {}

  getNotes(): Observable<any> {
    return this.http.get(this.notesUrl, { observe: 'response' }).pipe(
      map((res: HttpResponse<Object>) => {
        // tslint:disable-next-line:no-unused-expression
        res.ok;
        // console.log(res);
        return res.body;
      })
    );
  }

  getNote(id: string): Observable<any> {
    return this.http.get(this.notesUrl + '/' + id, { observe: 'response' }).pipe(
      map((res: HttpResponse<Object>) => {
        // tslint:disable-next-line:no-unused-expression
        res.ok;
        // console.log(res);
        return res.body;
      })
    );
  }
  addNote(note: Note): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type':  'application/json'
    });
    note.id = null;
    // note.tags = [{ name: 'Angular' }, { name: 'Typescript'} ];
    return this.http.post(this.notesUrl, note, httpOptions).pipe(
      map((res: HttpResponse<Object>) => {
        // tslint:disable-next-line: no-unused-expression
        res.ok;
        // console.log(res);
        return res;
      })
    );
  }

  deleteNote (id: string): Observable<{}> {
    return this.http.delete(this.notesUrl + '/' + id, httpOptions)
      .pipe(
        map((res: any) => {
          // console.log('delete', res);
          return res;
        })
      );
  }
}

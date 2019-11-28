import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as noteActions from '../actions/notes';
import { NotesService } from '../services/notes.service';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Note } from '../state/state';
import { Action } from '@ngrx/store';

@Injectable()
export class NoteEffects {
  constructor(private action$: Actions, private notesService: NotesService) {}

  @Effect() getNotes$ = this.action$.pipe(
    ofType(noteActions.NoteActionTypes.getNotes),
    mergeMap((action: noteActions.GetNotes) =>
      this.notesService.getNotes().pipe(
        map((notes: Note[]) => new noteActions.GetNotesSuccess(notes)),
        catchError(err => of(new noteActions.GetNotesFail(err)))
      )
    )
  );
  // @Effect() getSingleNote$ = this.action$.pipe();

  @Effect() addNote$: Observable<Action> = this.action$.pipe(
    ofType(noteActions.NoteActionTypes.addNote),
    map((action: noteActions.AddNote) => action.payload),
    mergeMap((note: Note) =>
      this.notesService.addNote(note).pipe(
        map((newnote: Note) => new noteActions.AddNoteSuccess(newnote)),
        catchError(err => of(new noteActions.AddNoteFail(err)))
      )
    )
  );

  @Effect() deleteNote$: Observable<Action> = this.action$.pipe(
    ofType(noteActions.NoteActionTypes.deleteNote),
    map((action: noteActions.DeleteNote) => action.payload),
    mergeMap((noteId: string) =>
      this.notesService.deleteNote(noteId).pipe(
        map(() => new noteActions.DeleteNoteSuccess(noteId)),
        catchError(err => of(new noteActions.DeleteNoteFail(err)))
      ))
  );
}

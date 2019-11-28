import { Action } from '@ngrx/store';
import { Note } from '../state/state';

export enum NoteActionTypes {
  getNotes = '[Notes] GET Started',
  getNotesSuccess = '[Notes] Get Success',
  getNotesFail = '[Notes] Get Fail',
  addNote = '[Notes] Add Note',
  addNoteSuccess = '[Notes] Add Note Success',
  addNoteFail = '[Notes] Add Note Fail',
  deleteNote = '[Notes] Delete Note',
  deleteNoteSuccess = '[Notes] Delete Note Success',
  deleteNoteFail = '[Notes] Delete Note Fail'
}

export class GetNotes implements Action {
  readonly type = NoteActionTypes.getNotes;
}

export class GetNotesSuccess implements Action {
  readonly type = NoteActionTypes.getNotesSuccess;
  constructor(public payload: Note[]) {}
}
export class GetNotesFail implements Action {
  readonly type = NoteActionTypes.getNotesFail;
  constructor(public payload: string) {}
}

export class AddNote implements Action {
  readonly type = NoteActionTypes.addNote;
  constructor(public payload: Note) {}
}
export class AddNoteSuccess implements Action {
  readonly type = NoteActionTypes.addNoteSuccess;
  constructor(public payload: Note) {}
}
export class AddNoteFail implements Action {
  readonly type = NoteActionTypes.addNoteFail;
  constructor(public payload: string) {}
}


export class DeleteNote implements Action {
  readonly type = NoteActionTypes.deleteNote;
  constructor(public payload: string) {}
}
export class DeleteNoteSuccess implements Action {
  readonly type = NoteActionTypes.deleteNoteSuccess;
  constructor(public payload: string) {}
}
export class DeleteNoteFail implements Action {
  readonly type = NoteActionTypes.deleteNoteFail;
  constructor(public payload: string) {}
}

export type NoteActions = GetNotes
      | GetNotesSuccess
      | GetNotesFail
      | AddNote
      | AddNoteSuccess
      | AddNoteFail
      | DeleteNote
      | DeleteNoteSuccess
      | DeleteNoteFail;

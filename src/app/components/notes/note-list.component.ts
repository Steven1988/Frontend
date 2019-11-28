import { Component, OnInit } from '@angular/core';
// import { Note } from './INote';
import * as noteActions from '../../actions/notes';

import { Store, select } from '@ngrx/store';
import { getNotes } from '../../selectors';
import { Note } from '../../state/state';

@Component({
  templateUrl: 'notes.pug',
  styleUrls: ['./note-list.scss']
})
export class NoteListComponent implements OnInit {
  notes: Note[];
  constructor(private store: Store<any>) {}
  ngOnInit(): void {
    this.getNotes();
  }

  getNotes() {
    this.store.dispatch(new noteActions.GetNotes());
    this.store.pipe(select(getNotes())).subscribe((notes: Note[]) => (this.notes = notes));
  }

  deleteNote(evt, id: string) {
    evt.stopPropagation();
    console.log('clicked on delete:', id);
    this.store.dispatch(new noteActions.DeleteNote(id));

  }
}

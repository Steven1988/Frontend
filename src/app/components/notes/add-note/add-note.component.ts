import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NotesService } from '../../../services/notes.service';
import { AppState, CurrentUser, Note } from 'src/app/state/state';
import { Store, select } from '@ngrx/store';
import * as noteActions from '../../../actions/notes';
import { getActiveUser } from '../../../selectors';

@Component({
  templateUrl: 'addnote.pug'
})
export class AddNoteComponent implements OnInit {
  addNoteForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl('')
  });
  currentUser: CurrentUser;

  constructor(private notesService: NotesService, private store: Store<AppState>) {}
  ngOnInit(): void {
    const x = 5;
    this.store.pipe(select(getActiveUser)).subscribe((currentUser: CurrentUser) => (this.currentUser = currentUser));
  }

  addNote(): void {
    console.log('Adding a new note');
    const note: Note = {
      title: this.addNoteForm.value.title,
      body: this.addNoteForm.value.body,
      userId: this.currentUser.id,
      created: new Date().toISOString()
    };
    console.log(note);

    // call service to add note
    this.store.dispatch(new noteActions.AddNote(note));
  }
}

import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../../services/notes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../../../state/state';

@Component({
  templateUrl: 'note-details.pug'
})
export class NoteDetailsComponent implements OnInit {
  note: Note;
  constructor(private notesService: NotesService, private _route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    if (id) {
      this.getNote(id);
    }
  }

  getNote(id: string) {
    // const id: string = '1';

    return this.notesService.getNote(id).subscribe(note => (this.note = note));
  }
}

// Framework Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

// App Modules

// Components
import { NoteListComponent } from './note-list.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { AddNoteComponent } from './add-note/add-note.component';

// Services
import { NotesService } from '../../services/notes.service';
import { reducer } from '../../reducers/notes';

// Effects
import { EffectsModule } from '@ngrx/effects';
import { NoteEffects } from '../../effects/note-effects';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('notes', reducer),
    EffectsModule.forFeature([NoteEffects]),
    ReactiveFormsModule
  ],
  declarations: [NoteListComponent, NoteDetailsComponent, AddNoteComponent],
  providers: [NotesService]
})
export class NotesModule {}

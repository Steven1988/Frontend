import { NoteState } from '../state/state';
import { NoteActions, NoteActionTypes } from '../actions/notes';

const initialState: NoteState = {
  notes: []
};

export function reducer(state = initialState, action: NoteActions): NoteState {
  switch (action.type) {
    case NoteActionTypes.getNotesSuccess:
      return {
        ...state,
        notes: action.payload
      };
    case NoteActionTypes.deleteNoteSuccess:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload),
      };
    default:
      return state;
  }
}

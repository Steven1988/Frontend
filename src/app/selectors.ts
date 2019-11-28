import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NoteState, TagState, AppState } from './state/state';

const getNoteFeatureState = createFeatureSelector<NoteState>('notes');
export function getNotes() {
  const res = createSelector(
    getNoteFeatureState,
    state => state.notes
  );
  return res;
}

const getTagFeatureState = createFeatureSelector<TagState>('tags');
export function getTags() {
  const resp = createSelector(
    getTagFeatureState,
    state => state.tags
  );
  return resp;
}



export const getActiveUser = (state: AppState) => state.currentUser;


// const getTheCurrentUser = createFeatureSelector<AppState>('currentUser');
// export const getCurrentUser = createSelector(
//     getTheCurrentUser,
//     (state: AppState) => state.currentUser
//   );

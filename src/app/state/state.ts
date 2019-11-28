export interface AppState {
  noteState: NoteState;
  tagState: TagState;
  currentUser: CurrentUser;
}



export interface NoteState {
  notes: Note[];
}

export interface Note {
  id?: string;
  title: string;
  body: string;
  userId: string;
  created: string;
  tags: Tag[];
}

export interface TagState {
  tags: Tag[];
}

export interface Tag {
  id?: string;
  name: string;
}

export interface DbUser {
  id: string;
  name: string;
  email: string;
}

export interface CurrentUser extends DbUser {
  id: string;
  name: string;
  email: string;
}

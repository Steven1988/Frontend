import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UsersComponent } from '../components/users/users.component';
import { UserDetailComponent } from '../components/users/userDetail/user-detail.component';
import { AddUserComponent } from '../components/users/addUser/add-user.component';
import { PostListComponent } from '../components/posts/post-list.component';

import { postRoutes } from '../components/posts/post.routes';
import { NoteListComponent } from '../components/notes/note-list.component';
import { NoteDetailsComponent } from '../components/notes/note-details/note-details.component';
import { AddNoteComponent } from '../components/notes/add-note/add-note.component';
import { TagsComponent } from '../components/tags/tags.component';
import { EditCurrentUserComponent } from '../components/users/editUser/edit-current-user.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'users', component: UsersComponent },
      { path: 'users/add-user', component: AddUserComponent },
      { path: 'users/editprofile', component: EditCurrentUserComponent },
      { path: 'users/:id', component: UserDetailComponent },
      { path: 'posts', component: PostListComponent },
      { path: 'notes', component: NoteListComponent },
      { path: 'notes/addnote', component: AddNoteComponent },

      { path: 'notes/:id', component: NoteDetailsComponent },
      { path: 'tags', component: TagsComponent },

      { path: '', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    RouterModule.forChild(postRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

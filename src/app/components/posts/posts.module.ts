import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import { postRoutes } from './post.routes';

import { PostListComponent } from './post-list.component';

import { PostsService } from './posts.service';
import { NotesService } from '../../services/notes.service';

@NgModule({
  imports: [CommonModule],
  declarations: [PostListComponent],
  providers: [PostsService, NotesService]
})
export class PostsModule {}

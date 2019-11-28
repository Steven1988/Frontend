// Framework Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// App Modules
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { NotesModule } from './components/notes/notes.module';
import { PostsModule } from './components/posts/posts.module';
import { UsersModule } from './components/users/users.module';

// Components
import { NavComponent } from './components/navigation/nav.component';
import { TagsComponent } from './components/tags/tags.component';


// Services
import { UsersService } from './services/users.service';
import { RandomDataService } from './components/common/random-data.service';
import { environment } from '../environments/environment';

import { TagsService } from './services/tags.service';
import { TagsEffect } from './effects/tags-effects';

import { reducer as tagReducer } from './reducers/tags';



@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({'tags': tagReducer}),
    EffectsModule.forRoot([TagsEffect]),
    StoreDevtoolsModule.instrument({
      name: 'MyWiki',
      maxAge: 30,
      logOnly: environment.production
    }),
    NotesModule,
    PostsModule,
    UsersModule
  ],
  declarations: [AppComponent, NavComponent, TagsComponent],

  providers: [RandomDataService, UsersService, TagsService],
  bootstrap: [AppComponent]
})
export class AppModule {}

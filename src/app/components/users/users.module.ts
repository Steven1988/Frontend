// Framework Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// ###### App Modules

// Components
import { UsersComponent } from './users.component';
import { UserDetailComponent } from './userDetail/user-detail.component';
import { EditCurrentUserComponent } from './editUser/edit-current-user.component';

// Services
import { UsersService } from '../../services/users.service';
import { reducer as currentUserReducer } from '../../reducers/currentUser';
import { AddUserComponent } from './addUser/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';

// Effects


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        StoreModule.forFeature('users', currentUserReducer),
        EffectsModule.forFeature([]),
        ReactiveFormsModule
    ],
    declarations:  [UsersComponent, AddUserComponent, UserDetailComponent, EditCurrentUserComponent],
    providers: [UsersService]
})

export class UsersModule {}

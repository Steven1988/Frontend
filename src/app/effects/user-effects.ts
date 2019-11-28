import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UsersService } from '../services/users.service';
import * as userActions from '../actions/currentUser';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { CurrentUser } from '../state/state';
import { of } from 'rxjs';


@Injectable()

export class UserEffects {
    constructor(private action$: Actions, private usersService: UsersService) { }

    @Effect() GetSingleUser = this.action$.pipe(
        ofType(userActions.CurrentUserActionTypes.getUser),
        map((action: userActions.GetUser) => action.payload),
        mergeMap((userId: string) =>
            this.usersService.getSingleUser(userId).pipe(
                map((user: CurrentUser) => new userActions.GetUserSuccess(user)),
                catchError(err => of(new userActions.GetUserFailed(err)))
            ))
    );
}

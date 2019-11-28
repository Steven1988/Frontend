import { Action } from '@ngrx/store';
import { CurrentUser } from '../state/state';

export enum CurrentUserActionTypes {
    getUser = '[CurrentUser] Get User Started',
    getUserSuccess = '[CurrentUser] Get User Success',
    getUserFailed = '[CurrentUser] Get User Failed',

}

export class GetUser implements Action {
    readonly type = CurrentUserActionTypes.getUser;
    constructor(public payload: string) {}
}

export class GetUserSuccess implements Action {
    readonly type = CurrentUserActionTypes.getUserSuccess;
    constructor(public payload: CurrentUser) {}
}
export class GetUserFailed implements Action {
    readonly type = CurrentUserActionTypes.getUserFailed;
    constructor(public payload: string) {}
}

export type CurrentUserActions = GetUser
    | GetUserSuccess
    | GetUserFailed;

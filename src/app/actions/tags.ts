import { Action } from '@ngrx/store';
import { Tag } from '../components/tags/ITag';


export enum TagActionTypes {
    getTags = '[Tags] GET Started',
    getTagsSuccess = '[Tags] GET Success',
    getTagsFailed = '[Tags] GET Failed',
}

export class GetTags implements Action {
    readonly type = TagActionTypes.getTags;
}

export class GetTagsSuccess implements Action {
    readonly type = TagActionTypes.getTagsSuccess;
    constructor(public payload: Tag[]) {}
}
export class GetTagsFailed implements Action {
    readonly type = TagActionTypes.getTagsFailed;
    constructor(public payload: string) {}
}

export type TagActions = GetTags
    | GetTagsSuccess
    | GetTagsFailed;

import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as tagActions from '../actions/tags';
import { TagsService } from '../services/tags.service';

import { mergeMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Tag } from '../state/state';


@Injectable()
export class TagsEffect {
    constructor(private action$: Actions, private tagsService: TagsService) {}
    @Effect() getTags$ = this.action$.pipe(
        ofType(tagActions.TagActionTypes.getTags),
        mergeMap((action: tagActions.GetTags) =>
        this.tagsService.getTags().pipe(
            map((tags: Tag[]) => new tagActions.GetTagsSuccess(tags)),
            catchError(err => of(new tagActions.GetTagsFailed(err)))
        )
        )
    );
}

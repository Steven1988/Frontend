import { Component, OnInit } from '@angular/core';

import * as tagActions from '../../actions/tags';
import { Tag } from '../../state/state';
import { Store, select } from '@ngrx/store';
import { getTags } from '../../selectors';

@Component({
    templateUrl: 'tags.pug',
})

export class TagsComponent implements OnInit {
    tags: Tag[] = [];
    name: '';

    constructor(private store: Store<any>) {}

    ngOnInit(): void {
        this.getTags();
    }

    getTags() {
        this.store.dispatch(new tagActions.GetTags());
        this.store.pipe(select(getTags())).subscribe((tags: Tag[]) => (this.tags = tags));
    }
}


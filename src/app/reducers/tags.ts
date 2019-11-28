import { TagActions, TagActionTypes } from '../actions/tags';
import { TagState } from '../state/state';

const initialState: TagState = {
    tags: []
};

export function reducer(state = initialState, action: TagActions): TagState {
    switch (action.type) {
        case TagActionTypes.getTagsSuccess:
            return {
                ...state,
                tags: action.payload
            };

        default:
            return state;
    }
}

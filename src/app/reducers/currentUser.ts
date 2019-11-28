import { CurrentUser } from '../state/state';
import { CurrentUserActions, CurrentUserActionTypes } from '../actions/currentUser';

const initialState: CurrentUser = {
    id: '47909344-e29b-47a0-ada5-08d756f143b0',
    name: 'Stefan',
    email: 'Steven_meldgaard@hotmail.com'
};

export function reducer(state = initialState, action: CurrentUserActions): CurrentUser {
    // Add switch statement when developed further

    switch (action.type) {
        case CurrentUserActionTypes.getUserSuccess:
            const currentUser = action.payload;
            return currentUser;
        default:
            return state;
    }
}

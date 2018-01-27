import _ from 'lodash';
import { FETCH_POSTS, FETCH_SINGLE_POST } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_SINGLE_POST:
            // rather than losing all the posts previously fetched
            // '...state' will add to the new state about to be returned
            // ES6
            return { ...state, [action.payload.data.id]: action.payload.data };
            // ES5
            // const post = action.payload.data;
            // const newState = { ...state };
            // newState[post.id] = post;
            // return newState;
        default:
            return state;
    }
}
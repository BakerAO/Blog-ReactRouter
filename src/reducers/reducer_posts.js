import _ from 'lodash';
import { FETCH_POSTS, FETCH_SINGLE_POST, DELETE_POST } from '../actions';

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
        case DELETE_POST:
            // _.omit : if the state object has a key of the post's id
            // return a new object without that key
            return _.omit(state, action.payload);
        default:
            return state;
    }
}
import {combineReducers} from 'redux';

const NEW_QUOTE = 'NEW_QUOTE';
const INITIAL_STATE = {'quote': '', 'author': ''};

function rootReducer(state = INITIAL_STATE, action = {'type': 'default'}) {
    switch(action.type) {
        case NEW_QUOTE:
            let newState = Object.assign({}, state);
            newState.quote = action.quote;
            newState.author = action.author;
            return newState;
        default:
            return state;
    }
}

const reducers =  combineReducers({
    rootReducer
});

export default reducers;
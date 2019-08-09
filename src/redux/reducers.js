import {combineReducers} from 'redux';

const NEW_QUOTE = 'NEW_QUOTE';
const INITIAL_STATE = {'quote': '', 'author': ''};

const rootReducer = (state = INITIAL_STATE, action = {'type': 'default'}) => {
    switch(action.type) {
        case NEW_QUOTE:
            return state;
        default:
            return state;
    }
};

const reducers = combineReducers({
    rootReducer
});

export default reducers;
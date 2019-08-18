import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';

import reducers from './redux/reducers';

import * as serviceWorker from './serviceWorker';

const INITIAL_STATE = {'rootReducer': {}};

const store = createStore(
  reducers,
  INITIAL_STATE,
  applyMiddleware(thunk)
);

const NEW_QUOTE = 'NEW_QUOTE';
const newQuote = (quote, author) => {
    return {
        type: NEW_QUOTE,
        quote: quote,
        author: author
    }
};

const mapStateToProps = (state) => {
    return {
        quote: state.rootReducer.quote,
        author: state.rootReducer.author
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadNewQuote: (quote, author) => {
            dispatch(newQuote(quote, author))
        }
    }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

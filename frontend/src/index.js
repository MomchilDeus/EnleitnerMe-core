import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga';

import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers/index';
import rootWatcher from './sagas/index';
import { fetchCardsCreator, addCardCreator } from './actions/index';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  index: reducer,
  form: formReducer
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);

const mapDispatchToProps = dispatch => ({
  fetchCards: () => dispatch(fetchCardsCreator()),
  addCard: data => dispatch(addCardCreator(data))
});

const mapStateToProps = ({ cards }) => ({
  cards
});

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import { all } from 'redux-saga/effects';

import fetchCardsWatcher from './fetchCards';
import addCardWatcher from './addCard';

function* rootWatcher() {
  yield all([fetchCardsWatcher(), addCardWatcher()]);
}

export default rootWatcher;

import { call, put, takeEvery } from 'redux-saga/effects';

function* fetchCardsWorker() {
  try {
    yield put({ type: 'FETCH_CARDS_SUCCESS', cards: [] });
  } catch (e) {
    yield put({ type: 'FETCH_CARDS_FAIL', cards: [] });
  }
}

function* fetchCardsWatcher() {
  yield takeEvery('FETCH_CARDS', fetchCardsWorker);
}

export default fetchCardsWatcher;

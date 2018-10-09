import { call, put, takeEvery } from 'redux-saga/effects';

function* addCardWorker(data) {
  try {
    yield put({ type: 'ADD_CARD_SUCCESS' });
  } catch (e) {
    yield put({ type: 'ADD_CARD_FAIL' });
  }
}

function* addCardWatcher() {
  yield takeEvery('ADD_CARD', addCardWorker);
}

export default addCardWatcher;

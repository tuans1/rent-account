
import { all } from 'redux-saga/effects'
import accountSaga from './accountSaga';

export default function* rootSaga() {
    yield all([
       accountSaga(),
    ])
}
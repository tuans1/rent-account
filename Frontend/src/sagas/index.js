
import { all } from 'redux-saga/effects'
import accountSaga from './accountSaga';
import adminSaga from './adminSaga';
import gameSaga from './gameSaga';
import rentHistorySaga from './rentHistorySaga';
export default function* rootSaga() {
    yield all([
        accountSaga(), gameSaga(), adminSaga(), rentHistorySaga()
    ])
}

import { all } from 'redux-saga/effects'
import accountSaga from './accountSaga';
import adminSaga from './adminSaga';
import gameSaga from './gameSaga';
export default function* rootSaga() {
    yield all([
        accountSaga(), gameSaga(), adminSaga()
    ])
}
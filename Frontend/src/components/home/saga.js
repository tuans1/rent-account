import { takeLatest } from 'redux-saga/effects'
import * as constants from './constants'

function* onCounterUpSaga(){
    console.log("UP");
}

function* onCounterDownSaga(){
    console.log("DOWN");
}

export default function* sagaWatcher() {
    yield takeLatest(constants.COUNTER_UP, onCounterUpSaga);
    yield takeLatest(constants.COUNTER_DOWN, onCounterDownSaga);
}
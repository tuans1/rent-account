import { act } from 'react-dom/test-utils';
import { takeLatest ,put } from 'redux-saga/effects';
import * as constants from '../reducers/staff';

function* testSaga(){
    console.log("RUN Saga")
}

export default function* staffSaga() {
    yield takeLatest(constants.INCREMENT, testSaga)
}


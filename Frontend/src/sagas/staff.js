import { act } from 'react-dom/test-utils';
import { takeLatest, put, call } from 'redux-saga/effects';
import * as constants from '../reducers/staff';
import axios from 'axios';
import { fetchData } from '../config/request';
// http://localhost:6969/api/staff?page=0&size=10&containing=



function* testSaga() {
    // try {
    //     const result = yield call(fetchData);
    //     if (result.records) {
    //         yield put({ type: 'FETCH_STAFF_SUCCESS', payload: result })
    //     }

    // } catch (err) {
    //     console.log("RUN")
    //     console.log(err)
    // }
}

export default function* staffSaga() {
    yield takeLatest(constants.FETCH_STAFF, testSaga)
}


import { act } from 'react-dom/test-utils';
import { takeLatest, put, call } from 'redux-saga/effects';
import * as constants from '../reducers/staff';
import axios from 'axios';
import moment from 'moment';
import { fetchData } from '../config/request';
// http://localhost:6969/api/staff?page=0&size=10&containing=



function* fetchStaffSaga() {
    try {
        const result = yield call(fetchData);
        if (result.records) {
            yield put({ type: 'FETCH_STAFF_SUCCESS', payload: result })
        }
        console.log(result)
    } catch (err) {
        console.log("RUN")
        console.log(err)
    }
}
function* createStaffSaga({ payload }) {
    
    payload.staff.joiningDate =  payload.staff.joiningDate.getTime();
    axios({
        method: 'post',
        url: 'http://localhost:6969/api/staff',
        data: payload.staff
    }).then((response) => {
        console.log(response);
    }, (error) => {
        console.log(error);
    });
    payload.callbackResetForm();
}
function* getStaffSaga() {
    try {
        const result = yield call(fetchData);
        if (result.records) {
            yield put({ type: 'FETCH_STAFF_SUCCESS', payload: result })
        }
        console.log(result)
    } catch (err) {
        console.log("RUN")
        console.log(err)
    }
}
export default function* staffSaga() {
    yield takeLatest(constants.FETCH_STAFF, fetchStaffSaga);
    yield takeLatest(constants.FETCH_CREATE_STAFF, createStaffSaga);
    yield takeLatest(constants.GET_UPDATE_STAFF, getStaffSaga);
}


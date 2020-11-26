import { act } from 'react-dom/test-utils';
import { takeLatest, put, call } from 'redux-saga/effects';
import * as constants from '../reducers/staff';
import axios from 'axios';
import request from '../config/request';
import { Success, Error } from '../common/notify';

// http://localhost:6969/api/staff?page=0&size=10&containing=



function* fetchStaffSaga({ payload }) {

    const { page, size, containing } = payload;
    try {
        const result = yield call(request, `staff?page=${page}&size=${size}&containing=${containing}`, {
            method: "GET",
        });
        yield put({ type: constants.FETCH_STAFF_SUCCESS, payload: result })
    } catch (err) {
        console.log(err)
        //   yield put(actions.onSetFailure({
        //     message: "Không thể tải danh sách đơn đặt hàng"
        //   }))
    }
}
function* createStaffSaga({ payload }) {

    payload.staff.joiningDate = payload.staff.joiningDate.getTime();
    try {
        const result = yield call(request, 'staff', {
            method: "post",
            body: JSON.stringify(payload.staff)
        });
    } catch (err) {
        console.log(err)
        //   yield put(actions.onSetFailure({
        //     message: "Không thể tải danh sách đơn đặt hàng"
        //   }))
    }
    payload.callbackResetForm();

}
function* getStaffSaga({ payload }) {
    try {
        const result = yield call(request, `staff/${payload}`, {
            method: "GET",
        });
        yield put({ type: constants.SET_UPDATE_STAFF, payload: result })


    } catch (err) {
        console.log(err)
        //   yield put(actions.onSetFailure({
        //     message: "Không thể tải danh sách đơn đặt hàng"
        //   }))
    }
}
function* updateStaffSaga({ payload }) {
    try {
        const result = yield call(request, `staff`, {
            method: "put",
            body: JSON.stringify(payload)
        });
        yield call(Success, { message: "Update Staff Successfully!" })
    } catch (err) {
        console.log(err)
        //   yield put(actions.onSetFailure({
        //     message: "Không thể tải danh sách đơn đặt hàng"
        //   }))
    }
}
export default function* staffSaga() {
    yield takeLatest(constants.FETCH_STAFF, fetchStaffSaga);
    yield takeLatest(constants.FETCH_CREATE_STAFF, createStaffSaga);
    yield takeLatest(constants.GET_UPDATE_STAFF, getStaffSaga);
    yield takeLatest(constants.FETCH_UPDATE_STAFF, updateStaffSaga);
}


import { takeLatest, put, call } from 'redux-saga/effects';
import * as constants from '../reducers/staff';
import request from '../config/request';
import { Success, Error, Warn } from '../common/notify';

// http://localhost:6969/api/staff?page=0&size=10&containing=



function* fetchStaffSaga({ payload }) {
    const { page, size, containing } = payload;
    try {
        const result = yield call(request, `staff?page=${page}&size=${size}&containing=${containing}`, {
            method: "GET",
        });
        const isExists = result.records.map(x => x)
        if (isExists.length === 0) {
            yield call(Warn, { message: "No Staff Was Found !" })
        }
        yield put({ type: constants.FETCH_STAFF_SUCCESS, payload: result })
    } catch (err) {
        yield call(Error, { message: "Cannot load Staffs list !" })
    }
}
function* createStaffSaga({ payload }) {
    try {
        yield call(request, 'staff', {
            method: "post",
            body: JSON.stringify(payload.staff)
        });
        payload.callbackRefreshList();
        const result = yield call(request, `staff?page=0&size=10&containing=`, {
            method: "GET",
        });
        payload.callbackResetForm();
        yield put({ type: constants.FETCH_STAFF_SUCCESS, payload: result })
        yield call(Success, { message: "Create Staff Successfully !" })
    } catch (err) {
        const {errorCode} = yield err.json();
        if(errorCode === 1003){
            yield call(Error, { message: " ID Staff has been exist,please try again !" })
        }else{
            yield call(Error, { message: " An unknown error occurred, please try again !" })
        }
    }


}
function* getStaffSaga({ payload }) {
    try {
        const result = yield call(request, `staff/${payload}`, {
            method: "GET",
        });
        yield put({ type: constants.SET_UPDATE_STAFF, payload: result })
    } catch (err) {
        const {errorCode} = yield err.json();
        if (errorCode === 1002){
            yield call(Error, { message: " ID not found, please try again !" })
        }
    }
}
function* updateStaffSaga({ payload }) {
    try {
        yield call(request, `staff`, {
            method: "put",
            body: JSON.stringify(payload.staff)
        });
        payload.callbackRefreshList();
        const result = yield call(request, `staff?page=0&size=10&containing=`, {
            method: "GET",
        });
        yield put({ type: constants.FETCH_STAFF_SUCCESS, payload: result })
        yield call(Success, { message: "Update Staff Successfully !" })
    } catch (err) {
        yield call(Error, { message: " An unknown error occurred, please try again !" })
    }
}
function* deleteStaffSaga({ payload }) {
    try {
        yield call(request, `staff/` + payload, {
            method: "DELETE",
        });
        const result = yield call(request, `staff?page=0&size=10&containing=`, {
            method: "GET",
        });
        yield put({ type: constants.FETCH_STAFF_SUCCESS, payload: result })
        yield call(Success, { message: "Delete Staff Successfully !" })
    } catch (err) {
        const { errorCode } = yield err.json();
        if (errorCode === 1002){
            yield call(Error, { message: " ID not found, please try again !" })
        }
   }
}
export default function* staffSaga() {
    yield takeLatest(constants.FETCH_STAFF, fetchStaffSaga);
    yield takeLatest(constants.FETCH_CREATE_STAFF, createStaffSaga);
    yield takeLatest(constants.GET_UPDATE_STAFF, getStaffSaga);
    yield takeLatest(constants.FETCH_UPDATE_STAFF, updateStaffSaga);
    yield takeLatest(constants.FETCH_DELETE_STAFF, deleteStaffSaga);

}


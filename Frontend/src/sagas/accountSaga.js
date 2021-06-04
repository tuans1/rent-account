
import { call, put, takeLatest } from 'redux-saga/effects';
import * as constants from '../reducers/accountReducer';
import Api from '../request';
import * as adminConstants from '../reducers/adminReducer';
import { Success, Error, Warn } from '../common/toastify';
// get list account in Account + Admin PAGE
function* fetchAccountSaga() {
    try {
        const payload = yield call(Api, '/account', 'get')
        yield put({ type: constants.FETCH_ACCOUNT_SUCCESS, payload })
    } catch (err) {
        yield call(Error, { message: "Error !" })
        console.log(err)
    }
}

// create account then render new list
function* fetchCreateAccountSaga({ payload }) {
    try {
        yield call(Api, '/account/create', 'post', JSON.stringify(payload));
        yield call(Success, { message: "Tạo Acc thành công !" })
        yield fetchAccountSaga();
    } catch (err) {
        yield call(Error, { message: "Error !" })
        console.log(err)
    }
}
// edit account then render new list
function* fetchEditAccountSaga({ payload }) {
    try {
        yield call(Api, '/account/edit', 'put', JSON.stringify(payload));
        yield call(Success, { message: "Cập nhật Acc thành công !" })
        yield fetchAccountSaga();
    } catch (err) {
        yield call(Error, { message: "Error !" })
        console.log(err)
    }
}
// delete account then render new list
function* fetchDeleteAccountSaga({ payload }) {
    try {
        yield call(Api, '/account/delete', 'delete', JSON.stringify({ id: payload }));
        yield call(Success, { message: "Xóa Acc thành công !" })
        yield fetchAccountSaga();
    } catch (err) {
        yield call(Error, { message: "Error !" })
        console.log(err)
    }
}
const delay = time => new Promise(resolve => setTimeout(resolve, time));
function* fetchRentSaga({ payload }) {
    try {
        payload.userId = localStorage.getItem("id");
        const message = yield call(Api, '/admin/check-money', 'post', JSON.stringify(payload));
        if (message.error) {
            yield call(Warn, { message: message.error })
            yield call(delay, 2000);
            yield put({ type: constants.SET_OFF_LOADING })
            return;
        }
        yield call(delay, 2000);
        yield call(Success, { message: "Thuê Acc thành công !" })
        yield put({ type: constants.SET_OFF_LOADING })
        // const data = yield call(Api, '/account/rent', 'post', JSON.stringify(payload));
        // localStorage.setItem("token", data.token);
        // localStorage.setItem("money", data.money);
        yield put({ type: adminConstants.FETCH_ADMIN_SUCCESS })
        yield fetchAccountSaga();
    } catch (err) {
        yield call(Error, { message: "Error !" })
        yield put({ type: constants.SET_OFF_LOADING })
        console.log(err)
    }
}


export default function* accountSaga() {
    yield takeLatest(constants.FETCH_ACCOUNT, fetchAccountSaga);
    yield takeLatest(constants.FETCH_CREATE_ACCOUNT, fetchCreateAccountSaga);
    yield takeLatest(constants.FETCH_EDIT_ACCOUNT, fetchEditAccountSaga);
    yield takeLatest(constants.FETCH_DELETE_ACCOUNT, fetchDeleteAccountSaga);
    yield takeLatest(constants.FETCH_RENT_ACCOUNT, fetchRentSaga);
}
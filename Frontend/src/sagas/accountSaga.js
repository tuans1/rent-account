
import { call, put, takeLatest } from 'redux-saga/effects';
import * as constants from '../reducers/accountReducer';
import Api from '../request';

// get list account in Account + Admin PAGE
function* fetchAccountSaga() {
    try {
        const payload = yield call(Api, '/account', 'get')
        yield put({ type: constants.FETCH_ACCOUNT_SUCCESS, payload })
    } catch (err) {
        console.log(err)
    }
}

// create account then render new list
function* fetchCreateAccountSaga({ payload }) {
    try {
        yield call(Api, '/account/create', 'post', JSON.stringify(payload));
        yield fetchAccountSaga();
    } catch (err) {
        console.log(err)
    }
}
// edit account then render new list
function* fetchEditAccountSaga({ payload }) {
    try {
        yield call(Api, '/account/edit', 'put', JSON.stringify(payload));
        yield fetchAccountSaga();
    } catch (err) {
        console.log(err)
    }
}
// delete account then render new list
function* fetchDeleteAccountSaga({ payload }) {
    try {
        yield call(Api, '/account/delete', 'delete', JSON.stringify({ id: payload }));
        yield fetchAccountSaga();
    } catch (err) {
        console.log(err)
    }
}

function* fetchRentSaga({ payload }) {
    try {
        payload.userId = localStorage.getItem("id");
        const data = yield call(Api, '/admin/check-money', 'post', JSON.stringify(payload ));
        if(data.message){
            
        }
        yield call(Api, '/account/rent', 'post', JSON.stringify(payload ));
        yield fetchAccountSaga();
    } catch (err) {
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
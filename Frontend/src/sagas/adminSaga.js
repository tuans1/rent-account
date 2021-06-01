
import { call, put, takeLatest } from 'redux-saga/effects';
import * as constants from '../reducers/adminReducer';
import Api from '../request';

// get list account in Account + Admin PAGE
function* fetchAdminSaga({ payload }) {
    try {
        const data = yield call(Api, '/admin/login', 'post', JSON.stringify(payload))
        if (data.admin) {
            yield put({ type: constants.FETCH_LOGIN_SUCCESS, payload: data.admin })
            localStorage.setItem("token", data.admin.token);
            localStorage.setItem("name", data.admin.name);
            localStorage.setItem("id", data.admin.id);
            localStorage.setItem("role", data.admin.role);
            localStorage.setItem("money", data.admin.money);
        }
    } catch (err) {
        console.log(err)
    }
}
function* fetchAdminInfoSaga() {
    try {
        const data = yield call(Api, '/admin/' + localStorage.getItem("id"), 'get')
        if (data[0]) {
            localStorage.setItem("money", data[0].money);
            yield put({ type: constants.FETCH_LOGIN_SUCCESS })
        }
    } catch (e) {
        console.log(e)
    }
}

export default function* adminSaga() {
    yield takeLatest(constants.FETCH_LOGIN, fetchAdminSaga);
    yield takeLatest(constants.FETCH_ADMIN, fetchAdminInfoSaga);
    // yield takeLatest(constants.FETCH_DELETE_GAME, fetchDeleteGameSaga);
}
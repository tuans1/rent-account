
import { call, put, takeLatest } from 'redux-saga/effects';
import * as constants from '../reducers/adminReducer';
import Api from '../request';
import { useSelector } from 'react-redux';
// get list account in Account + Admin PAGE
function* fetchAdminSaga({ payload }) {
    try {
        const data = yield call(Api, '/admin/login', 'post', JSON.stringify(payload))
        if (data.admin) {
            yield put({ type: constants.FETCH_LOGIN_SUCCESS, payload: data.admin })
            localStorage.setItem("token", data.admin.token);
            localStorage.setItem("name", data.admin.name);
            localStorage.setItem("id", data.admin.id);
        }
    } catch (err) {
        console.log(err)
    }
}

// // create account then render new list
// function* fetchCreateGameSaga({ payload }) {
//     try {console.log(payload)
//         yield call(Api, '/game/create', 'post', JSON.stringify(payload));
//         yield fetchGameSaga();
//     } catch (err) {
//         console.log(err)
//     }
// }

// // delete account then render new list
// function* fetchDeleteGameSaga({ payload }) {
//     try {
//         yield call(Api, '/game/delete', 'delete', JSON.stringify({ id: payload }));
//         yield fetchGameSaga();
//     } catch (err) {
//         console.log(err)
//     }
// }


export default function* adminSaga() {
    yield takeLatest(constants.FETCH_LOGIN, fetchAdminSaga);
    // yield takeLatest(constants.FETCH_CREATE_GAME, fetchCreateGameSaga);
    // yield takeLatest(constants.FETCH_DELETE_GAME, fetchDeleteGameSaga);
}
import { takeLatest, put, call } from 'redux-saga/effects';
import * as constants from '../reducers/login';
import request from '../config/request';
import Swal from 'sweetalert2';
// http://localhost:6969/api/staff?page=0&size=10&containing=



function* fetchJwtSaga({ payload }) {
    try {
        const result = yield call(request, `login`, {
            method: "post",
            body: JSON.stringify(payload),
        });
        localStorage.removeItem("token");
        localStorage.setItem("token", result.accessToken);
        yield put({ type: constants.FETCH_JWT_SUCCESS })
    } catch (err) {
        if (err.status === 403) {
            yield put(constants.onFetchJwtFailed("Name or Passowrd is Incorrect"))
        } else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Cannot Connect to Server',
                showConfirmButton: false,
                timer: 3000
            })
            yield put(constants.onFetchJwtFailed("Cannot Connect to Server"))
        }
    }
}

function* fetchResetPasswordSaga({ payload }) {
    try {
        yield call(request, `forgot_password?email=` + payload, {
            method: "post",
        });
        yield put({ type: constants.FETCH_RESET_PASSWORD_SUCCESS, payload: true });
        yield put(constants.onFetchJwtFailed(""))
    } catch (err) {
        const { errorCode } = yield err.json();
        if (errorCode === 2002) {
            yield put(constants.onFetchJwtFailed("Gmail not found"))
        }
        // console.log(err)
        // if (err.status === 403) {
        //     yield put(constants.onFetchJwtFailed("There was an Error while Sending Mail"))
        // } else {
        //     Swal.fire({
        //         position: 'center',
        //         icon: 'error',
        //         title: 'Cannot Connect to Server',
        //         showConfirmButton: false,
        //         timer: 3000
        //     })
        //     yield put(constants.onFetchJwtFailed("Cannot Connect to Server"))
        // }
    }
}
function* fetchChangePasswordSaga({ payload }) {
    try {
        yield call(request, `change_password?password=${payload.password}&token=${payload.token}` , {
            method: "put",
        });
        yield put({ type: constants.FETCH_RESET_PASSWORD_SUCCESS, payload: true })
    } catch (err) {
        const { errorCode } = yield err.json();
        if (errorCode === 2003) {
            yield put({ type: constants.FETCH_CHANGE_PASSWORD_FAIL ,payload : "Cannot change password, please try again"})
        }
        // console.log(err)
        // if (err.status === 403) {
        //     yield put(constants.onFetchJwtFailed("There was an Error while Sending Mail"))
        // } else {
        //     Swal.fire({
        //         position: 'center',
        //         icon: 'error',
        //         title: 'Cannot Connect to Server',
        //         showConfirmButton: false,
        //         timer: 3000
        //     })
        //     yield put(constants.onFetchJwtFailed("Cannot Connect to Server"))
        // }
    }
}
function* fetchChangePasswordAdminSaga({ payload }) {
    try {
        yield call(request, `update?oldpw=${payload.oldpw}&newpw=${payload.newpw}` , {
            method: "put",
        });
        yield put({ type: constants.FETCH_CHANGE_PASSWORD_ADMIN_FAIL, payload: "done" })
    } catch (err) {
        const { errorCode } = yield err.json();
        if (errorCode === 2001) {
            yield put({ type: constants.FETCH_CHANGE_PASSWORD_ADMIN_FAIL,payload: "oldpw"})
        }
        // console.log(err)
        // if (err.status === 403) {
        //     yield put(constants.onFetchJwtFailed("There was an Error while Sending Mail"))
        // } else {
        //     Swal.fire({
        //         position: 'center',
        //         icon: 'error',
        //         title: 'Cannot Connect to Server',
        //         showConfirmButton: false,
        //         timer: 3000
        //     })
        //     yield put(constants.onFetchJwtFailed("Cannot Connect to Server"))
        // }
    }
}
export default function* staffSaga() {
    yield takeLatest(constants.FETCH_JWT, fetchJwtSaga);
    yield takeLatest(constants.FETCH_RESET_PASSWORD, fetchResetPasswordSaga);
    yield takeLatest(constants.FETCH_CHANGE_PASSWORD, fetchChangePasswordSaga);
    yield takeLatest(constants.FETCH_CHANGE_PASSWORD_ADMIN, fetchChangePasswordAdminSaga);
}


import { act } from 'react-dom/test-utils';
import { takeLatest, put, call } from 'redux-saga/effects';
import * as constants from '../reducers/login';
import axios from 'axios';
import request from '../config/request';
import { Success, Error } from '../common/notify';

// http://localhost:6969/api/staff?page=0&size=10&containing=



function* fetchJwtSaga({ payload }) {
    console.log(payload)
    try {
        const result = yield call(request, `login`, {
            method: "post",
            body: JSON.stringify(payload) ,
        });
        console.log(result)
        // yield put({ type: constants.FETCH_JWT_SUCCESS, payload: result })
    } catch (err) {
        console.log(err)
        //   yield put(actions.onSetFailure({
        //     message: "Không thể tải danh sách đơn đặt hàng"
        //   }))
    }
}

export default function* staffSaga() {
    yield takeLatest(constants.FETCH_JWT, fetchJwtSaga);

}


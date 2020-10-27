import staffSaga from '../components/staff/saga';
import homeSaga from '../components/home/saga';
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
    yield all([
        staffSaga(),
        homeSaga()
    ])
}
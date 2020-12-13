import staffSaga from '../sagas/staff';
import homeSaga from '../sagas/staff';
import login from '../sagas/login';
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
    yield all([
        staffSaga() ,login() ,// homeSaga() 
    ])
}
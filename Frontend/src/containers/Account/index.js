import { React } from 'react';
import Account from '../../components/Account';
import { useDispatch } from 'react-redux';
import * as action from '../../reducers/accountReducer';


export default function AccountPage() {
    const dispatch = useDispatch();
    const onHandleRent = (acc) => {
        dispatch(action.onFetchRentAccount(acc));
    }

    return (
        <Account onHandleRent={onHandleRent} />
    )
}
import { React, useState, useEffect } from 'react';
import AdminAccount from '../../components/Admin/account.js';
import * as action from '../../reducers/accountReducer';
import * as gameAction from '../../reducers/gameReducer';
import { useDispatch, useSelector } from 'react-redux';

export default function AdminAccountPage() {
    const dispatch = useDispatch();
    const { accounts } = useSelector(state => state.accountReducer);
    const { game } = useSelector(state => state.gameReducer);
    const onSubmit = (account) => {
        if (account.id) {
            dispatch(action.onFetchEditAccount(account));
        } else {
            dispatch(action.onFetchCreateAccount(account));
        }
    }
    const onDeleteAccount = accountId => {
        dispatch(action.onFetchDeleteAccount(accountId));
    }
    useEffect(() => {
        dispatch(gameAction.onFetchGame())
        dispatch(action.onFetchAccount())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <AdminAccount accountsList={accounts}
                gameList={game}
                onSubmit={onSubmit}
                onDeleteAccount={onDeleteAccount}
            />
        </>
    )
}
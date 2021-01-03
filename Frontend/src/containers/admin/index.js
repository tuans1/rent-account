import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../reducers/login';
import Menu from '../menu';

export default function Admin() {
    const [state, setState] = useState({
        oldpw: '',
        newpw: '',
        confirmpw: ''
    })
    const dispatch = useDispatch();
    const { messagePassword } = useSelector(state => state.loginReducer)
    const onChange = (name, value) => {
        setState({
            ...state, [name]: value
        })
    }
    const onSubmit = () => {
        if (state.newpw !== state.confirmpw) {
            dispatch(action.onFetchChangePasswordAdminFail("notmatch"));
        } else {
            dispatch(action.onFetchChangePasswordAdmin(state));
        }
    }
    const onClick = () => {

        localStorage.removeItem('token');
        window.location.href="http://localhost:3000/login"
        dispatch(action.onFetchJwtFailed())

    }
    return (
        <>
            <Menu />
            <div style={{ width: "50%", margin: "0 auto", display: "flex" }}>
                <div style={{ width: 300, marginTop: "2em" }}>
                    <div className="form-outline">
                        <label className="form-label" style={{ fontSize: 18 }}>Current Password</label>
                        <input type="password" value={state.oldpw} onChange={(e) => onChange("oldpw", e.target.value)} className="form-control" />
                    </div>
                    <div className="form-outline">
                        <label className="form-label" style={{ fontSize: 18 }}>New Password</label>
                        <input type="password" value={state.newpw} onChange={(e) => onChange("newpw", e.target.value)} className="form-control" />
                    </div>
                    <div className="form-outline">
                        <label className="form-label" style={{ fontSize: 18 }}>Confirm New Password</label>
                        <input type="password" value={state.confirmpw} onChange={(e) => onChange("confirmpw", e.target.value)} className="form-control" />
                    </div>
                    <button className="btn btn-info" onClick={onSubmit}>CHANGE</button>
                    <h3 style={{ color: "green" }}>{messagePassword === "done" ? "Change Password Success" : ''}</h3>
                    <h3 style={{ color: "red" }}>{messagePassword === "oldpw" ? "Old Password is not correct" : ''}</h3>
                    <h3 style={{ color: "red" }}>{messagePassword === "notmatch" ? "Confirm Password not match new Password" : ''}</h3>
                </div>
                <div>
                    <button onClick={onClick}>LOG OUT</button>
                </div>
            </div>
        </>
    )
}

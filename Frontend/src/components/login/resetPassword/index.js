import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../style.scss';
import * as action from '../../../reducers/login';


export default function ResetPassword() {
    const [state, setState] = useState({
        rePassword: '',
        password: '',
        error: '',
        token: ''
    })
    const dispatch = useDispatch();
    const {  isLoading, isChangeError, isSentMail } = useSelector(state => state.loginReducer);
    const onSetState = (key, value) => {
        setState({
            ...state,
            [key]: value
        })
    }
    useEffect(() => {
        var link = window.location.href
        let url = new URL(link);
        let searchParams = new URLSearchParams(url.search);
        setState({
            ...state, token: searchParams.get('token')
        })
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const loading = <div className="loader">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <span>Loading</span>
    </div>

    const onClick = () => {
                dispatch(action.onFetchChangePasswordFail(''))
        if (state.password && state.rePassword !== "") {
            if (state.password !== state.rePassword) {
                setState({
                    ...state,
                    error: 'Confirm Password not match new Password'
                })
            } else {
                dispatch(action.onFetchChangePassword(state))
                setState({
                    ...state,
                    error: ''
                })
            }
        } else {
            setState({
                ...state,
                error: 'Please fill out this form'
            })
        }

    }
    return (
        <>
            <div className="wrap_overlay">
                {isLoading && loading}
                <div className="wrap">
                    <div className="wrapper_login fadeInDown">
                        <div id="formContent">
                            <div className="fadeIn first">
                                <img src="https://icon-library.com/images/0083f9a69c_904.png" id="icon" alt="User Icon" style={{ width: 100 }} />
                            </div>
                            <form autoComplete="off">
                                <h3>CHANGE PASSWORD</h3>
                                <input type="password" value={state.rePassword} className="fadeIn  bt" placeholder="New Password" onChange={(e) => onSetState('rePassword', e.target.value)} />
                                <input type="password" value={state.password} className="fadeIn  bt" onChange={(e) => onSetState('password', e.target.value)} placeholder="Confirm New Password" />
                                <h3 style={{ color: "green"}}>{isSentMail ? "Change password Success !" : ""}</h3>
                                <h3 style={{ color: "red" }}>{state.error}</h3>
                                <h3 style={{ color: "red" }}>{isChangeError}</h3>
                                <button type="button" className="fadeIn  btn btn-info btn-lg" onClick={() => onClick(state.type)}>Change</button>
                            </form>
                            <div id="formFooter">
                                <Link to="/login"><p className="underlineHover" >Login?</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </LoadingOverlay> */}
            </div>

        </>
    )
}





import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../style.scss';
import * as action from '../../../reducers/login';
import Swal from 'sweetalert2';

export default function LoginPage() {
    const [state, setState] = useState({
        username: '',
        password: '',
        type: "login",
        gmail: '',
        error: ''
    })
    const history = useHistory();
    const dispatch = useDispatch();
    const { isLogin, isLoading, message, isSentMail } = useSelector(state => state.loginReducer);
    const onSetState = (key, value) => {
        setState({
            ...state,
            [key]: value
        })
    }
    useEffect(() => {
        if (isLogin === true) {
            setTimeout(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successfully ,Redirect to HomePage',
                    showConfirmButton: false,
                    timer: 2200
                })
            }, 2000)
            setTimeout(() => {
                dispatch(action.onSetLoginLoading());
                history.push("/home");
            }, 3000)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLogin])
    // eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNjA3OTE5MjQ3LCJleHAiOjE2MDg1MjQwNDd9.iynweGJaBNADugp29DIh__iE8HL2bXwQJQUbYSlOfj4qiADn-brVnIIwd7jDsKrG3OP10FeGpfhL7WElX9xKVg
    useEffect(() => {
        setState({
            ...state, username: '',
            password: '', gmail: '', error: ''
        });
        dispatch(action.onFetchResetPasswordSuccess(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.type])
    const loading = <div className="loader">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <span>Loading</span>
    </div>
    const change = (type) => {
        setState({ ...state, type: type })
    }
    const onClick = (type) => {
        if (type === "login") {
            dispatch(action.onFetchJwt(state));
        }
        else {
            let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
            if (!regEmail.test(state.gmail)) {
                setState({
                    ...state,
                    error: 'Invalid Gmail'
                })
            } else {
                dispatch(action.onFetchResetPassword(state.gmail))
                setState({
                    ...state,
                    error: ''
                })
            }

        }
    }
    const inputLogin = () => {
        if (state.type === "login") {
            return (
                <>
                    <input type="text" value={state.username} className="fadeIn  bt" name="username" placeholder="Name" onChange={(e) => onSetState('username', e.target.value)} />
                    <input type="password" value={state.password} className="fadeIn  bt" name="password" onChange={(e) => onSetState('password', e.target.value)} placeholder="Password" />
                    <h3 style={{ color: "red" }}>{message}</h3>
                    <button type="button" className="fadeIn  btn btn-info btn-lg" onClick={() => onClick(state.type)}>LOGIN</button>
                </>
            )
        } else {
            return (
                <>
                    <input type="email" value={state.gmail} className="fadeIn  bt" placeholder="Gmail" onChange={(e) => onSetState('gmail', e.target.value)} />
                    <h3 style={{ color: "green" }}>{isSentMail ? "We have sent you an Email to Continue, please check !" : ""}</h3>
                    <h3 style={{ color: "red" }}>{state.error}</h3>
                    <h3 style={{ color: "red" }}>{message}</h3>
                    <button type="button" className="fadeIn  btn btn-info btn-lg" onClick={() => onClick(state.type)}>SEND</button>
                </>
            )
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
                                {inputLogin()}
                            </form>
                            <div id="formFooter">
                                {state.type === "login" ? <p className="underlineHover" onClick={(e) => change("forgot")}>Forgot Password?</p>
                                    : <p className="underlineHover" onClick={(e) => change("login", e)}>Login?</p>}
                            </div>
                        </div>
                    </div>
                </div>
                {/* </LoadingOverlay> */}
            </div>

        </>
    )
}
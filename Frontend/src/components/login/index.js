import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import './style.scss';
import * as action from '../../reducers/login';

export default function LoginPage() {
    const [state,setState] = useState({
        name : '',
        password : ''
    })
    const dispatch = useDispatch();
    const onSetState=(key,value)=>{
        setState({
            ...state,
            [key] : value
        })
    }
    const login = (e) => {
        dispatch(action.onFetchJwt(state))
        e.preventDefault();
    }

    return (
        <>
            <div className="wrap">
                <div className="wrapper_login fadeInDown">
                    <div id="formContent">
                        <div className="fadeIn first">
                            <img src="https://icon-library.com/images/0083f9a69c_904.png" id="icon" alt="User Icon" style={{ width: 100 }} />
                        </div>
                        <form autoComplete="off">
                            <input type="text" id="login" className="fadeIn second" name="name" placeholder="Name" onChange={(e)=>onSetState('name',e.target.value)} required />
                            <input type="text" id="password" className="fadeIn third" name="password" onChange={(e)=>onSetState('password',e.target.value)} placeholder="Password"  required />
                            <button onClick={login} className="fadeIn fourth btn btn-info btn-lg">Login</button>
                        </form>
                        <div id="formFooter">
                            <a className="underlineHover" href="#">Forgot Password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
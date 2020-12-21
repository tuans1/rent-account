import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './style.scss';
import * as action from '../../reducers/login';
import Swal from 'sweetalert2';
export default function LoginPage() {
    const [state, setState] = useState({
        userName: '',
        passWord: ''
    })
    const [loaded, setLoaded] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    const { isLogin } = useSelector(state => state.loginReducer)
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
            },2000)
            setTimeout(() => {
                setLoaded(false);
                history.push("/home");
            }, 3000)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLogin])
    // eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNjA3OTE5MjQ3LCJleHAiOjE2MDg1MjQwNDd9.iynweGJaBNADugp29DIh__iE8HL2bXwQJQUbYSlOfj4qiADn-brVnIIwd7jDsKrG3OP10FeGpfhL7WElX9xKVg
    const login = (e) => {
        dispatch(action.onFetchJwt(state))
        setLoaded(true)
        e.preventDefault();
    }
    const loading = <div className="loader">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <span>Loading</span>
    </div>
    // const success = () => {
    //     Swal.fire({
    //         position: 'center',
    //         icon: 'success',
    //         title: 'Your work has been saved',
    //         showConfirmButton: false,
    //         timer: 2000
    //       })

    // }
    return (
        <>
            <div className="wrap_overlay">
                {loaded && loading}
                <div className="wrap">
                    <div className="wrapper_login fadeInDown">
                        <div id="formContent">
                            <div className="fadeIn first">
                                <img src="https://icon-library.com/images/0083f9a69c_904.png" id="icon" alt="User Icon" style={{ width: 100 }} />
                            </div>
                            <form autoComplete="off">
                                <input type="text" id="login" className="fadeIn second bt" name="username" placeholder="Name" onChange={(e) => onSetState('username', e.target.value)} required />
                                <input type="password" id="password" className="fadeIn third bt" name="password" onChange={(e) => onSetState('password', e.target.value)} placeholder="Password" required />
                                <button onClick={login} className="fadeIn fourth btn btn-info btn-lg">Login</button>
                            </form>
                            <div id="formFooter">
                                <p className="underlineHover" >Forgot Password?</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </LoadingOverlay> */}
            </div>

        </>
    )
}
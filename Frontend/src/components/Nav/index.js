import { Button } from 'bootstrap';
import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as action from '../../reducers/adminReducer';
import './style.css'

function Nav() {
    const history = useHistory();
    const [login, setLogin] = useState();
    const dispatch = useDispatch();
    const { isLogin, admin } = useSelector(state => state.adminReducer);
    const id = localStorage.getItem("id");
    // login xog sẽ đổi Login => Logout
    useEffect(() => {
        if (localStorage.getItem("token")) {
            setLogin(true);
        }
    }, [isLogin])

    const onLogOut = () => {
        localStorage.clear()
        history.push("login");
        setLogin(false);
        // thay state của isLogin => False
        dispatch(action.onSetLogout());
    }
    return (
        <div className="banner">
            <div className="container">
                {/* <!-- Navbar --> */}
                <nav className="navbar navbar-expand-lg ">
                    {/* <!-- Container wrapper --> */}
                    <div className="container-fluid">
                        {/* <!-- Navbar brand --> */}
                        <a className="navbar-brand" >LOGO</a>
                        {/* <!-- Toggle button --> */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fas fa-bars"></i>
                        </button>

                        {/* <!-- Collapsible wrapper --> */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* <!-- Left links --> */}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" >Nạp thẻ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" >Hướng dẫn thuê Acc</a>
                                </li>
                                {/* <!-- Navbar dropdown --> */}
                                <li className="nav-item">
                                    <a className="nav-link" tabIndex="-1"
                                    >Liên Hệ</a>
                                </li>
                            </ul>
                            {/* <!-- Left links -->
                            <!-- Search form --> */}
                            {login ? <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">0 VNĐ</button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" >ID : {id}</a></li>
                                    <li><a className="dropdown-item" >LỊCH SỬ NẠP TIỀN</a></li>
                                    <li><a className="dropdown-item" >TÀI KHOẢN ĐÃ THUÊ</a></li>
                                    <li><a className="dropdown-item" onClick={onLogOut}>ĐĂNG XUẤT</a></li>
                                </ul>
                            </div> : <h4 style={{ color: 'white' }}>Đăng Nhập</h4>}
                        </div>
                        {/* <!-- Collapsible wrapper --> */}
                    </div>
                    {/* <!-- Container wrapper --> */}
                </nav>
                {/* <!-- Navbar --> */}
            </div>
        </div>
    )
}

export default Nav;
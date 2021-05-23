import { Button } from 'bootstrap';
import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
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
        history.push("/dang-nhap");
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
                        <Link to="/" className="navbar-brand link" >TRANG CHỦ</Link>
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
                                    <Link to="/" className="nav-link link active" aria-current="page" >Nạp thẻ</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link link" >Hướng dẫn thuê Acc</Link>
                                </li>
                                {/* <!-- Navbar dropdown --> */}
                                <li className="nav-item">
                                    <Link to="/" className="nav-link link" tabIndex="-1">Liên Hệ</Link>
                                </li>
                            </ul>
                            {login ? <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">{localStorage.getItem("money").toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VNĐ</button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li className="dropdown-item">ID : {id}</li>
                                    <li><Link to="/" className="dropdown-item" >LỊCH SỬ NẠP TIỀN</Link></li>
                                    <li><Link to="lich-su-thue" className="dropdown-item" >TÀI KHOẢN ĐÃ THUÊ</Link></li>
                                    <li className="dropdown-item" onClick={onLogOut}>ĐĂNG XUẤT</li>
                                </ul>
                            </div> : <Link to="/dang-nhap" style={{ color: 'white', textDecoration: "none" }}><h2>Đăng Nhập</h2></Link>}
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
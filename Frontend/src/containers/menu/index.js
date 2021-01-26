import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';
import logo from '../../common/assest/test.png'
function StaffNav() {

    return (
        <>
            <div className="menu_wrap">
                <div className="left_wrap">
                </div>
                <div className="left">
                    <input type="checkbox" id="checkbox3" className="checkbox3 visuallyHidden" />
                    <label htmlFor="checkbox3">
                        <div className="hamburger hamburger3">
                            <span className="bar bar1"></span>
                            <span className="bar bar2"></span>
                            <span className="bar bar3"></span>
                            <span className="bar bar4"></span>
                        </div>
                    </label>
                    <div className="menu_nav" >
                        <img src={logo} style={{ width: 200 }} alt="" />
                        <div className="menu_li">
                            <Link to="/home"><div className="menu_list"><i className="fas fa-home  white-text menu_img"></i><p  > Home</p></div></Link>
                            <Link to="/staff"><div className="menu_list"><i className="fas fa-users  white-text menu_img"></i><p > Staff</p></div></Link>
                            <Link to="/summary"><div className="menu_list"><i className="fas fa-poll  white-text menu_img"></i><p > Summary</p></div></Link>
                            <Link to="/admin"><div className="menu_list"><i className="fas fa-user-tie  white-text menu_img"></i><p > Admin</p></div></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StaffNav;
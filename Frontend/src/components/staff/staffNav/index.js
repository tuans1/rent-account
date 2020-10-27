import React from 'react';
import './style.css';
function StaffNav() {
    return (
        <div className="col-xl-2 col-lg-12 col-md-12 col-sm-12  left">
            <input type="checkbox" id="checkbox3" className="checkbox3 visuallyHidden" />
            <label htmlFor="checkbox3">
                <div className="hamburger hamburger3">
                    <span className="bar bar1"></span>
                    <span className="bar bar2"></span>
                    <span className="bar bar3"></span>
                    <span className="bar bar4"></span>
                </div>
            </label>
            <div className="menu" >
                <div className="menu_list"><i className="fas fa-home  white-text menu_img"></i><p className="menu_li"> Home</p></div>
                <div className="menu_list"><i className="fas fa-users  white-text menu_img"></i><p className="menu_li"> Staff</p></div>
                <div className="menu_list"><i className="fas fa-poll  white-text menu_img"></i><p className="menu_li"> Summary</p></div>
                <div className="menu_list"><i className="fas fa-user-tie  white-text menu_img"></i><p className="menu_li"> Admin</p></div>
            </div>
        </div>
    )
}

export default StaffNav;
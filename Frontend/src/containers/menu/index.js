import React from 'react';
import {Link} from 'react-router-dom'
import './style.css';
import {useSelector ,useDispatch} from 'react-redux';
import * as action from '../../reducers/staff';

function StaffNav() {
    const {counter} = useSelector(state=>state.staffReducer)
    const dispatch = useDispatch();

    const test = () => {
        
    }
    return (
        <div className=" left">
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
                <Link to="/home"><div className="menu_list"><i className="fas fa-home  white-text menu_img"></i><p className="menu_li" > Home</p></div></Link>
                <Link to="/staff"><div className="menu_list"><i className="fas fa-users  white-text menu_img"></i><p className="menu_li"> Staff</p></div></Link>
                <Link to="/summary"><div className="menu_list"><i className="fas fa-poll  white-text menu_img"></i><p className="menu_li"> Summary</p></div></Link>
                <div className="menu_list"><i className="fas fa-user-tie  white-text menu_img"></i><p className="menu_li"> Admin</p></div>
            </div>
        </div>
    )
}

export default StaffNav;
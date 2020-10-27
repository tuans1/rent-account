import React from 'react';
import './style.css';


 function StaffNav() {

        // http://localhost:6969/api/staff
        
        async function postData() {
                     const response = await fetch('http://localhost:6969/api/staff', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
          console.log( response.json)
          }
          
        //   postData('http://localhost:6969/api/staff')
        //     .then(data => {
        //       console.log(data); // JSON data parsed by `data.json()` call
        //     });
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
                <div className="menu_list"><i className="fas fa-home  white-text menu_img"></i><p className="menu_li" onClick={postData}> Home</p></div>
                <div className="menu_list"><i className="fas fa-users  white-text menu_img"></i><p className="menu_li"> Staff</p></div>
                <div className="menu_list"><i className="fas fa-poll  white-text menu_img"></i><p className="menu_li"> Summary</p></div>
                <div className="menu_list"><i className="fas fa-user-tie  white-text menu_img"></i><p className="menu_li"> Admin</p></div>
            </div>
        </div>
    )
}

export default StaffNav;
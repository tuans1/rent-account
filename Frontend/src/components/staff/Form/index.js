import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './style.scss';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
function StaffForm(props) {
    const [valid, setValid] = useState({
        staffName: true,
        phone: true,
        address: true,
        position: true,
        salary: true,
        bankAccount: true,
        joiningDate: true,
        message: "Phone is required "
    });
    const { staffName, phone, salary, bankAccount, joiningDate, position, address } = props.staff;
    const { staff } = props;
    const { loadingList } = useSelector(state => state.staffReducer);
    const onSubmit = (e) => {
        const valid = Object.keys(staff).map(x => {
            return staff[x] !== ""
        })
        setValid({
            staffName: staffName ? true : false,
            phone: phone.length === 10 ? true : false,
            address: address ? true : false,
            position: position ? true : false,
            salary: salary ? true : false,
            bankAccount: bankAccount ? true : false,
            joiningDate: joiningDate ? true : false,
            message: phone.length === 0 ? "Phone is required " : "Phone must contain 10 numbers "
        })
        if (!valid.includes(false) && phone.length === 10) {
            props.onSubmit();
        }
        e.preventDefault();
    }
    useEffect(() => {
        setValid({
            staffName: true,
            phone: true,
            address: true,
            position: true,
            salary: true,
            bankAccount: true,
            joiningDate: true,
        })
    }, [staff])
    const onChange = (key, value) => {
        props.onChange(key, value)
    }
    const onDeleteDate = () => {
        props.onDeleteDate();
    }
    const onResetForm = () => {
        setValid({
            staffName: true,
            phone: true,
            address: true,
            position: true,
            salary: true,
            bankAccount: true,
            joiningDate: true
        })
        document.getElementById("default").selected = "true";
        props.onResetForm();
    }
    const onBlurInput = (key) => {
        if (props.staff.[`${key}`] === "") {
            setValid({
                ...valid, [key]: false
            })
        } else {
            setValid({
                ...valid, [key]: true
            })
        }
        if (key === 'phone') {
            if (phone.length < 10 && phone.length > 0) {
                setValid({
                    ...valid, phone: false, message: "Phone must contain 10 numbers "
                })
            } else if (phone.length === 0) {
                setValid({
                    ...valid, phone: false, message: "Phone is required"
                })
            }
            else {
                setValid({
                    ...valid, phone: true, message: ""
                })
            }
        }
    }

    var animateButton = function (e) {
        e.preventDefault();
        //reset animation
        e.target.classList.remove('animate');

        e.target.classList.add('animate');
        setTimeout(function () {
            e.target.classList.remove('animate');
        }, 1000);
    };

    var bubblyButtons = document.getElementsByClassName("bubbly-button-blue");

    for (var i = 0; i < bubblyButtons.length; i++) {
        bubblyButtons[i].addEventListener('click', animateButton, false);
    }
    return (
        <>
            <div className="modal fade" id="modalSubscriptionForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true" >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100 font-weight-bold">{staff.id ? "Update Staff" : "Create Staff"}</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div style={{ position: "absolute", top: 10, right: 10 }} onClick={onResetForm}>
                                <p className="bubbly-button ">Reset</p>
                            </div>
                        </div>
                        <div className="modal-body mx-3" >

                            <div className="md-form mb-5">
                                <i className="fas fa-user prefix grey-text"></i>
                                <input type="text" value={staffName} onChange={(e) => onChange("staffName", e.target.value)} onBlur={() => onBlurInput("staffName")} className={staffName ? "form-control validate valid" : "form-control validate"} autoComplete="off" />
                                <label data-error="wrong" data-success="right" className={staffName ? "active" : ""}>Name</label>
                                <div className="validate_text">
                                    {valid.staffName ? null : <p>Name is required <i className="fas fa-exclamation" style={{ fontSize: 15 }}></i></p>}
                                </div>
                            </div>
                            <div className="md-form mb-4">
                                <i className="fas fa-mobile-alt prefix grey-text"></i>
                                <input type="text" value={phone.toString().replace(/\B(?=(\d{4})+(?!\d))/g, ".")} maxLength="12" onChange={(e) => onChange("phone", e.target.value.replace(/\D/g, ""))} onBlur={() => onBlurInput("phone")} className={phone ? "form-control validate valid" : "form-control validate"} autoComplete="off" />
                                <label data-error="wrong" data-success="right" className={phone ? "active" : ""}>Phone Number</label>
                                <div className="validate_text">
                                    {valid.phone ? null : <p>{valid.message}<i className="fas fa-exclamation" style={{ fontSize: 15 }}></i></p>}
                                </div>
                            </div>
                            <div className="md-form mb-5">
                                <i className="fas fa-user prefix grey-text"></i>
                                <input type="text" value={address} onChange={(e) => onChange("address", e.target.value)} onBlur={() => onBlurInput("address")} className={address ? "form-control validate valid" : "form-control validate"} autoComplete="off" />
                                <label data-error="wrong" data-success="right" className={address ? "active" : ""}>Address</label>
                                <div className="validate_text">
                                    {valid.address ? null : <p>Phone is required  <i className="fas fa-exclamation" style={{ fontSize: 15 }}></i></p>}
                                </div>
                            </div>
                            <div className="md-form mb-4" >
                                {position !== "" && <label data-error="wrong" data-success="right" style={{ fontSize: 12, top: -25, left: 35 }}>Position</label>}
                                <i className="fas fa-mobile-alt prefix grey-text"></i>
                                <select style={{ marginTop: 5, borderColor: position !== "" ? " #00c851" : "#ced4da" }} value={position ? position : ""} onBlur={() => onBlurInput("position")} className={position === "" ? "browser-default custom-select  input_select" : "browser-default custom-select  input_select2"} onChange={(e) => onChange("position", e.target.value)}>
                                    <option value="" id="default" >Choose Position</option>
                                    <option value="Nhân Viên" >Nhân Viên</option>
                                    <option value="Thư Ký" >Thư Ký</option>
                                    <option value="Trưởng Phòng" >Trưởng Phòng</option>
                                </select>
                                <div className="validate_text" style={{ marginTop: 10 }}>
                                    {valid.position ? null : <p>Position is required  <i className="fas fa-exclamation" style={{ fontSize: 15 }}></i></p>}
                                </div>
                            </div>
                            <div className="md-form mb-4" style={{ marginTop: 40 }}>
                                <i className="fas fa-mobile-alt prefix grey-text"></i>
                                <input type="text" value={salary} onChange={(e) => onChange("salary", e.target.value)} onBlur={() => onBlurInput("salary")} className={salary ? "form-control validate valid" : "form-control validate"} autoComplete="off" />
                                <label data-error="wrong" data-success="right" className={salary ? "active" : ""}>Salary</label>
                                <div className="validate_text">
                                    {valid.salary ? null : <p>Salary is required  <i className="fas fa-exclamation" style={{ fontSize: 15 }}></i></p>}
                                </div>
                            </div>
                            <div className="md-form mb-4">
                                <i className="fas fa-mobile-alt prefix grey-text"></i>
                                <input type="text" value={bankAccount} onChange={(e) => onChange("bankAccount", e.target.value)} onBlur={() => onBlurInput("bankAccount")} className={bankAccount ? "form-control validate valid" : "form-control validate"} autoComplete="off" />
                                <label data-error="wrong" data-success="right" className={bankAccount ? "active" : ""}>Bank Account</label>
                                <div className="validate_text">
                                    {valid.bankAccount ? null : <p>Phone is required  <i className="fas fa-exclamation" style={{ fontSize: 15 }}></i></p>}
                                </div>
                            </div>
                            <div className="md-form mb-4">
                                {joiningDate && <label data-error="wrong" data-success="right" style={{ fontSize: 12, top: -25, left: 35 }}>Joining Date</label>}
                                <i className="fas fa-mobile-alt prefix grey-text"></i>
                                <DatePicker dateFormat="dd-MM-yyyy" className={joiningDate ? "date_picker" : ""} onBlur={() => onBlurInput("joiningDate")} selected={joiningDate} onChange={date => onChange("joiningDate", date)} placeholderText="Joining Date" />
                                {joiningDate && <div className="close-container" onClick={onDeleteDate}>
                                    {/* <div className="leftright"></div>
                                    <div className="rightleft"></div> */}
                                </div>}
                                <div className="validate_text">
                                    {valid.joiningDate ? null : <p>Joining Date is required  <i className="fas fa-exclamation" style={{ fontSize: 15 }}></i></p>}
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button onClick={onSubmit} className={loadingList ? "bubbly-button-disabled " : "bubbly-button-blue "} disabled={loadingList ? true : false} style={{ width: 90 }}>
                                {loadingList && <div>
                                    <div className="spinner-border" role="status"> </div>
                                </div>}
                                Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default StaffForm;
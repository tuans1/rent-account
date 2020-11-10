import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";
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
        joiningDate: true
    });
    const [startDate, setStartDate] = useState(new Date());
    const [color, setColor] = useState(false);
    const [sub, setSub] = useState(false)
    const { staffName, phone, salary, bankAccount, joiningDate, position, address, date } = props.staff;
    const { staff } = props;

    const onSubmit = (e) => {
        let test = Object.keys(staff).map(x => {
            return staff[x] !== ""
        })
        if(!test.includes(false)){
            console.log(test)
        }
        // setValid({
        //     staffName : staffName ? true : false
        // })
        // props.onSubmit();
        e.preventDefault();

    }
    const onChange = (key, value) => {
        props.onChange(key, value)
    }
    const onDeleteDate = () => {
        props.onDeleteDate();
    }

    return (
        <>
            <div className="modal fade" id="modalSubscriptionForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100 font-weight-bold">Subscribe</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body mx-3">
                            <div className="md-form mb-5">
                                <i className="fas fa-user prefix grey-text"></i>
                                <input type="text" value={staffName} onChange={(e) => onChange("staffName", e.target.value)} className="form-control validate" autoComplete="off" />
                                <label data-error="wrong" data-success="right" >Name</label>
                                <div className="validate_text">
                                    {sub && <p>Name is required  <i className="fas fa-exclamation" style={{ fontSize: 15 }}></i></p>}
                                </div>
                            </div>
                            <div className="md-form mb-4">
                                <i className="fas fa-mobile-alt prefix grey-text"></i>
                                <input type="text" value={phone} onChange={(e) => onChange("phone", e.target.value)} className="form-control validate" autoComplete="off" />
                                <label data-error="wrong" data-success="right">Phone Number</label>
                            </div>
                            <div className="md-form mb-5">
                                <i className="fas fa-user prefix grey-text"></i>
                                <input type="text" value={address} onChange={(e) => onChange("address", e.target.value)} className="form-control validate" autoComplete="off" />
                                <label data-error="wrong" data-success="right" >Name</label>
                                <div className="validate_text">
                                    {sub && <p>Name is required  <i className="fas fa-exclamation" style={{ fontSize: 15 }}></i></p>}
                                </div>
                            </div>
                            <div className="md-form mb-4" >
                                {position !== "" && <label data-error="wrong" data-success="right" style={{ fontSize: 12, top: -25, left: 35 }}>Position</label>}
                                <i className="fas fa-mobile-alt prefix grey-text"></i>
                                <select style={{ marginBottom: 10, marginTop: 5, borderColor: position !== "" ? " #00c851" : "#ced4da" }} className={position === "" ? "browser-default custom-select  input_select" : "browser-default custom-select  input_select2"} onChange={(e) => onChange("position", e.target.value)}>
                                    <option value="" defaultValue >Choose Position</option>
                                    <option value="1">Nhân Viên</option>
                                    <option value="2">Thư Ký</option>
                                    <option value="3">Trưởng Phòng</option>
                                </select>
                            </div>
                            <div className="md-form mb-4">
                                <i className="fas fa-mobile-alt prefix grey-text"></i>
                                <input type="text" value={salary} onChange={(e) => onChange("salary", e.target.value)} className="form-control validate" autoComplete="off" />
                                <label data-error="wrong" data-success="right" >Salary</label>
                            </div>
                            <div className="md-form mb-4">
                                <i className="fas fa-mobile-alt prefix grey-text"></i>
                                <input type="text" value={bankAccount} onChange={(e) => onChange("bankAccount", e.target.value)} className="form-control validate" autoComplete="off" />
                                <label data-error="wrong" data-success="right" >Bank Account</label>
                            </div>
                            <div className="md-form mb-4">
                                {joiningDate && <label data-error="wrong" data-success="right" style={{ fontSize: 12, top: -25, left: 35 }}>Joining Date</label>}
                                <i className="fas fa-mobile-alt prefix grey-text"></i>
                                <DatePicker className={joiningDate ? "date_picker" : ""}  selected={joiningDate} onChange={date => onChange("joiningDate", date)} placeholderText="Joining Date" />
                                {joiningDate && <div className="close-container" onClick={onDeleteDate}>
                                    <div className="leftright"></div>
                                    <div className="rightleft"></div>
                                </div>}
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button onClick={onSubmit} className="btn btn-indigo">Send <i className="fas fa-paper-plane-o ml-1"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default StaffForm;
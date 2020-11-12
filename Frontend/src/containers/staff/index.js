import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useLocation, useHistory } from 'react-router';
import './style.css';
import moment from 'moment';
import Form from '../../components/staff/Form';
import DeleteModal from '../../components/staff/DeleteModal';
import List from '../../components/staff/List';

import * as action from '../../reducers/staff';


function Staff() {
    const [staff, setStaff] = useState({
        staffName: "",
        phone: "",
        address: "",
        position: "",
        salary: "",
        bankAccount: "",
        joiningDate: "",
    });
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(function () {
            dispatch(action.onFetchStaff())
        }, 1200)
    })

    const handleSubmit = () => {
        dispatch(action.onFetchCreateStaff({staff : staff ,callbackResetForm : handleResetForm}));
    }
    const handleOnChange = (key, value) => {
        setStaff({
            ...staff,
            [key]: value,
        })
    }
    const handleGetStaff = (x) => {
        dispatch(action.onGetUpdateStaff(x));
    }
    const handleDeleteDate = () => {
        setStaff({
            ...staff, joiningDate: ""
        })
    }
    const handleResetForm = () => {
        setStaff({
            staffName: "",
            phone: "",
            address: "",
            position: "",
            salary: "",
            bankAccount: "",
            joiningDate: "",
        })
    }
    return (
        <>
            <Form
                staff={staff}
                onSubmit={handleSubmit}
                onChange={handleOnChange}
                onDeleteDate={handleDeleteDate}
                onResetForm={handleResetForm}
            />
            <List
                onGetStaff={handleGetStaff} />
            <DeleteModal />
        </>
    )
}
export default Staff;
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useLocation, useHistory } from 'react-router';
import './style.css';
import moment from 'moment';
import Form from '../../components/staff/Form';
import DeleteModal from '../../components/staff/DeleteModal';
import List from '../../components/staff/List';

import * as action from '../../reducers/staff';
import { Switch, Route } from 'react-router-dom';

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
        console.log(staff)
    }
    const handleOnChange = (key, value) => {
        setStaff({
            ...staff,
            [key]: value,
        })
    }
    const handleGetStaff = (x) => {
        console.log(x);
    }
    const handleDeleteDate = () => {
        setStaff({
            ...staff, joiningDate: ""
        })
    }
    return (
        <>
            <Form
                staff={staff}
                onSubmit={handleSubmit}
                onChange={handleOnChange} 
                onDeleteDate={handleDeleteDate}
                />
            <List
                onGetStaff={handleGetStaff} />
            <DeleteModal />
        </>
    )
}
export default Staff;
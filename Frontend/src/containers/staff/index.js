import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './style.css';
import Form from '../../components/staff/Form';
import List from '../../components/staff/List';
import * as action from '../../reducers/staff';
import Menu from '../menu';

function Staff() {
    const [staff, setStaff] = useState({
        employeeName: "",
        phone: "",
        address: "",
        position: "",
        salary: "",
        grade: "",
        joiningDate: "",
        allowance:"",
        loan:""
    });
    const { updateStaff } = useSelector(state => state.staffReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        if (updateStaff) {
            setStaff({
                ...updateStaff
            })
        }
    }, [updateStaff])
    const handleSubmit = () => {
        if (staff.id) {
            dispatch(action.onFetchUpdateStaff({ staff: staff, callbackRefreshList: handleRefreshList }))
        } else {
            dispatch(action.onFetchCreateStaff({ staff: staff, callbackResetForm: handleResetForm , callbackRefreshList: handleRefreshList}));
        }
    }
    const handleOnChange = (key, value) => {
        setStaff({
            ...staff,
            [key]: value,
        })
    }
    const handleGetStaff = (id) => {
        dispatch(action.onGetUpdateStaff(id));
    }
    const handleDeleteDate = () => {
        setStaff({
            ...staff, joiningDate: ""
        })
    }
    const handleRefreshList = () => {
        dispatch(action.onSetStaffRequesting());
    }
    const handleResetForm = () => {
        setStaff({
            employeeName: "",
            phone: "",
            address: "",
            position: "",
            salary: "",
            grade: "",
            joiningDate: "",
            loan:"",
            allowance:""
        })
    }


    return (
        <>
            <Menu />
            <Form
                staff={staff}
                onSubmit={handleSubmit}
                onChange={handleOnChange}
                onDeleteDate={handleDeleteDate}
                onResetForm={handleResetForm}
            />
            <List
                onResetForm={handleResetForm}
                onGetStaff={handleGetStaff} />
        </>
    )
}
export default Staff;
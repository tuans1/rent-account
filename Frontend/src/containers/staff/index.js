import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './style.css';
import Form from '../../components/staff/Form';
import DeleteModal from '../../components/staff/DeleteModal';
import List from '../../components/staff/List';
import * as action from '../../reducers/staff';
import Menu from '../menu';

function Staff() {
    const [staff, setStaff] = useState({
        staffName: "asdas",
        phone: "1234567890",
        address: "123",
        position: "123",
        salary: "123",
        bankAccount: "123",
        joiningDate: "",
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
            <DeleteModal />
        </>
    )
}
export default Staff;
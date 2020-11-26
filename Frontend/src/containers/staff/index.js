import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
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
        if(staff.id){
            dispatch(action.onFetchUpdateStaff(staff))
        }else{
            dispatch(action.onFetchCreateStaff({ staff: staff, callbackResetForm: handleResetForm }));
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
                onResetForm={handleResetForm}
                onGetStaff={handleGetStaff} />
            <DeleteModal />
        </>
    )
}
export default Staff;
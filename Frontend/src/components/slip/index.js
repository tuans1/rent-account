import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as action from '../../reducers/staff';
import SalarySlip from '../../components/../containers/salarySlip/index';

export default function Slip(props) {
    const getStaff = useParams().id;
    const { updateStaff } = useSelector(state => state.staffReducer);
    const dispatch = useDispatch();
    const { id, staffName, position } = updateStaff;
    useEffect(() => {
        dispatch(action.onGetUpdateStaff(getStaff));
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <h1>OK</h1>
                </div>
            </div>
        </>
    )
}
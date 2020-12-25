import React, { useRef,useEffect } from 'react'
import Slip from '../../components/slip';
import  ReactToPrint  from "react-to-print";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as action from '../../reducers/staff';
export default function SalarySlip() {
    const componentRef = useRef(null);
    const getStaff = useParams().id;
    const { updateStaff } = useSelector(state => state.staffReducer);
    const dispatch = useDispatch();
    const { id, staffName, position } = updateStaff;
    useEffect(() => {
        dispatch(action.onGetUpdateStaff(getStaff));
    }, [])
    return (
        <>
            <ReactToPrint
                trigger={() => <button>Print this out!</button>}
                content={() => componentRef.current}
            />
            <Slip ref={componentRef} staff={updateStaff}/>
        </>
    )
}
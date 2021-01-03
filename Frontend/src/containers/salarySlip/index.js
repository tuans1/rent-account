import React, { useRef, useEffect, useState } from 'react'
import Slip from '../../components/slip';
import ReactToPrint from "react-to-print";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as action from '../../reducers/staff';
export default function SalarySlip() {
    const componentRef = useRef();
    const getStaff = useParams().id;
    const { updateStaff } = useSelector(state => state.staffReducer);
    const dispatch = useDispatch();
    const [days, setDays] = useState("");
    useEffect(() => {
        dispatch(action.onGetUpdateStaff(getStaff));
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const handleOnChange = (e) => {
        setDays(e);
    }
    const getDate = () => {
        var days = prompt("Please enter Days Worked !");
        if (days !== null) {
            setDays(days);  
        }
    }
    return (
        <>
            <div className="container">
                {days === "" ? <button className="btn btn-info btn-lg" onClick={getDate}>PRINT</button>
                    : <ReactToPrint
                        trigger={() => <button className="btn btn-info btn-lg">PRINT</button>}
                        content={() => componentRef.current}
                        
                    />}

                <Slip ref={componentRef} staff={updateStaff} onChange={handleOnChange} days={days} />
            </div>
        </>
    )
}
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import SweetAlert from 'react-bootstrap-sweetalert';


export default function Notify() {
    const { staff } = useSelector(state => state.staffReducer);
    const [test,setTest] = useState(true)
    const onConfirm = (response) =>{
        setTest(false)
    }
    const onCancel = (response) =>{
        setTest(false)
    }
    return (
        <>
            <SweetAlert
                danger
                show={test}
                title="Success Data!"
                onConfirm={(response) =>onConfirm(response)}
                onCancel={(response) =>onCancel(response)}
                timeout={5000}
            >
                This success message will automatically close after 2 seconds
            </SweetAlert>
        </>
    )
}

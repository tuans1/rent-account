import React, { useRef } from 'react'
import Slip from '../../components/slip';
import  ReactToPrint  from "react-to-print";

export default function SalarySlip() {
    const componentRef = useRef(null);

    return (
        <>
            <ReactToPrint
                trigger={() => <button>Print this out!</button>}
                content={() => componentRef.current}
            />
            <Slip ref={componentRef} />
        </>
    )
}
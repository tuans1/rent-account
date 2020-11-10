import React, { useState,useEffect } from 'react';
import {useSelector} from 'react-redux';

import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

export default function Notify() {
    const {staff} = useSelector(state=>state.staffReducer);
    useEffect(()=>{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: true,
            timer: 2500 
        })
    } )
    console.log("RUN")
    return (
        <>

        </>
    )
}


import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export  function Error(params) {
    console.log(params)
    toast.error('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}

export  function Success(params) {
    console.log(params)
    toast.success(params.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}

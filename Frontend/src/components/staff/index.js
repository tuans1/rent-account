import React, { useState } from 'react';
import {useLocation, useHistory} from 'react-router';

function Staff() {
    const location = useLocation();
    const history = useHistory();
    function goBackHandle(){
        history.goBack();
    }
    return (
        <>
            <h1>HELLO</h1>
        </>
    )
}
export default Staff;
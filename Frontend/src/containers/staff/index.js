import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router';
import './style.css';

import StaffForm from '../../components/staff/staffForm';
import StaffDeleteModal from '../../components/staff/staffDeleteModal';
import StaffList from '../../components/staff/staffList';


function Staff() {
    // const [openMenu, setOpenMenu] = useState(false);
    return (
        <>
            <StaffList />
            <StaffForm />
            <StaffDeleteModal />

        </>
    )
}
export default Staff;
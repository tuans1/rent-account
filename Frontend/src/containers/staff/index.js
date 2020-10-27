import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router';
import './style.css';

import StaffForm from '../../components/staff/staffForm';
import StaffDeleteModal from '../../components/staff/staffDeleteModal';
import StaffList from '../../components/staff/staffList';
import StaffNav from '../../components/staff/staffNav';

function Staff() {
    // const [openMenu, setOpenMenu] = useState(false);
    return (
        <>
            <div className="wrapper">
                <StaffNav/>
                <StaffList/>
            </div>
            <StaffForm />
            <StaffDeleteModal />

        </>
    )
}
export default Staff;
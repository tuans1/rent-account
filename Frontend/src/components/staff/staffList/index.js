
import moment from 'moment';
import React, { useState } from 'react';
import { Button, ButtonGroup, Table } from 'react-bootstrap';
import StaffDatePicker from '../staffDatePicker';

function StaffList() {
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    var a = moment(startDate).format('DD/MM/YYYY')
    return (
        <>
            <div className="col-xl-10 col-lg-12 col-xs-12 col-md-12 col-sm-12 right">
               <StaffDatePicker/>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th style={{ width: 50 }}>STT</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Position</th>
                            <th>Salary</th>
                            <th>Bank Account</th>
                            <th>Joining Date</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table_staff">
                            <td className="table_staff">1</td>
                            <td className="table_staff">Lương Anh Tuấn</td>
                            <td className="table_staff">0942307756</td>
                            <td className="table_staff">Trưởng Phòng</td>
                            <td className="table_staff">12.000.000 đ</td>
                            <td className="table_staff">17552480201</td>
                            <td className="table_staff" >12/5/2020</td>
                            <td style={{ width: 20 }}>
                                <ButtonGroup>
                                    <a href="" data-toggle="modal" data-target="#modalSubscriptionForm">
                                        <Button variant="info" size="sm"><i className="far fa-edit prefix"></i></Button>
                                    </a>
                                    <a href="#myModal" className="trigger-btn" data-toggle="modal">
                                        <Button variant="danger" size="sm"><i className="far fa-trash-alt"></i></Button>
                                    </a>
                                </ButtonGroup>
                            </td>
                        </tr>
                    </tbody>
                </Table>

            </div>
        </>
    )

}
export default StaffList;
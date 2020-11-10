
import moment from 'moment';
import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { Button, ButtonGroup, Table } from 'react-bootstrap';
import StaffDatePicker from '../DatePicker';
import { Pagination } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import StaffListLoading from '../../skeletonLoad/staffListLoading';



function List(props) {
  const [totalPages, setTotalPages] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [open, setOpen] = useState(false)
  const { staff, loadingList } = useSelector(state => state.staffReducer)
  const change = (event, data) => {
    setCurrentPage(data.activePage)
  }
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let staffListLoading = arr.map(x => {
    return (
      <StaffListLoading key={x} />
    )
  })
  const onGetStaff = (x)=>{
    props.onGetStaff(x);
  }
  let staffList = staff.map((x, index) => {
    return (
      <tr className="table_staff" key={x.id}>
        <td className="table_staff">{index + 1}</td>
        <td className="table_staff">{x.staffName}</td>
        <td className="table_staff">{x.phone}</td>
        <td className="table_staff">{x.position}</td>
        <td className="table_staff">{x.salary} đ</td>
        <td className="table_staff">{x.bankAccount}</td>
        <td className="table_staff" >{x.joiningDate}</td>
        <td style={{ width: 20 }}>
          <ButtonGroup>
            <a href="" data-toggle="modal" data-target="#modalSubscriptionForm" onClick={()=>onGetStaff(x)}>
              <Button variant="info" size="sm"><i className="far fa-edit prefix"  style={{ fontSize: 16 }}></i></Button>
            </a>
            <a href="#myModal" className="trigger-btn" data-toggle="modal">
              <Button variant="danger" size="sm"><i className="far fa-trash-alt" style={{ fontSize: 16 }}></i></Button>
            </a>
          </ButtonGroup>
        </td>
      </tr>
    )
  })
  return (
    <>
      <div className="col-xl-10 col-lg-12 col-xs-12 col-md-12 col-sm-12 right" style={{ letterSpacing: 1 }}>
        <StaffDatePicker />
        <Table bordered hover size="sm">
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
          <tbody >
            {/* {loadingList ? staffListLoading : staffList} */}

          </tbody>
        </Table>
        <div style={{ textAlign: "center" }}>
          <Pagination defaultActivePage={1} totalPages={5} onPageChange={change} />
        </div>
      </div>
    </>
  )

}
export default List;
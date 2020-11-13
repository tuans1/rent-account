import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { Button, ButtonGroup, Table } from 'react-bootstrap';
import StaffDatePicker from '../DatePicker';
import { Pagination } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import * as action from '../../../reducers/staff';
import StaffListLoading from '../../skeletonLoad/staffListLoading';
import './style.scss'
const PAGE_SIZE = 10;

function List(props) {
  const [pagination, setPagination] = useState({
    page: 0,
    containing: "",
    size: PAGE_SIZE
  })
  const { staff, loadingList, totalPage } = useSelector(state => state.staffReducer)
  const handlePage = (event, data) => {
    setPagination({
      ...pagination, page: data.activePage - 1
    })
  }
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let staffListLoading = arr.map(x => {
    return (
      <StaffListLoading key={x} />
    )
  })
  const onGetStaff = (staff) => {
    props.onGetStaff(staff.id);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(function () {
      dispatch(action.onFetchStaff(pagination))
    }, 1200)
  }, [pagination])
  const onResetForm = () => {
    props.onResetForm();
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
            <a href="" data-toggle="modal" data-target="#modalSubscriptionForm" onClick={() => onGetStaff(x)}>
              <Button variant="info" size="sm"><i className="far fa-edit prefix" style={{ fontSize: 16 }}></i></Button>
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
        <StaffDatePicker onResetForm={onResetForm} />
        <div className="tbody">
          <Table bordered hover size="sm" >
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
              {loadingList ? staffListLoading : staffList}
            </tbody>
          </Table>
        </div>

        <div style={{ textAlign: "center" }}>
          <Pagination defaultActivePage={1} totalPages={totalPage} onPageChange={handlePage} />
        </div>
      </div>
    </>
  )
}
export default List;
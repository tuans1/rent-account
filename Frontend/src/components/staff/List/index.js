import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { Button, ButtonGroup, Table } from 'react-bootstrap';
import StaffDatePicker from '../DatePicker';
import DeleteModal from '.././DeleteModal/index';
import { Pagination } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { CSVLink } from "react-csv";

import * as action from '../../../reducers/staff';
import StaffListLoading from '../../skeletonLoad/staffListLoading';
import './style.scss';
import { Link } from 'react-router-dom';


const PAGE_SIZE = 10;

function List(props) {
  const [pagination, setPagination] = useState({
    page: 0,
    containing: "",
    size: PAGE_SIZE
  })
  const [showAll, setShowAll] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const dispatch = useDispatch();
  const { staff, loadingList, totalPage } = useSelector(state => state.staffReducer);
  const { isLogin } = useSelector(state => state.loginReducer);
  const handlePageChange = (event, data) => {
    dispatch(action.onSetStaffRequesting());
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

  useEffect(() => {
    if (isLogin) {
      dispatch(action.onFetchStaff(pagination));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.page, isLogin]);

  useEffect(() => {
    if (isLogin) {
      if (showAll) {
        dispatch(action.onSetStaffRequesting());
        dispatch(action.onFetchStaff({ ...pagination, size: 100 }));
      } else {
        dispatch(action.onSetStaffRequesting());
        dispatch(action.onFetchStaff(pagination));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showAll, isLogin])
  const onResetForm = () => {
    props.onResetForm();
  }
  const handleSearch = (key, value) => {
    if (key === "containing") {
      setPagination({
        ...pagination, containing: value
      })
    }

  }
  const handleSearchSubmit = () => {
    dispatch(action.onSetStaffRequesting());
    setTimeout(function () {
      dispatch(action.onFetchStaff(pagination));
    }, 500)
  }
  const handleDeleteStaff = () => {
    dispatch(action.onFetchDeleteStaff(deleteId));
  }
  let staffList = staff.map((x, index) => {
    return (
      <tr className="table_staff" key={x.id}>
        <td className="table_td">{index + 1}</td>
        <td className="table_td" style={{ width: 70 }}>{x.id}</td>
        <td className="table_td">{x.staffName}</td>
        <td className="table_td" style={{ width: 150 }}>{x.phone}</td>
        <td className="table_td" >{x.address}</td>
        <td className="table_td" style={{ width: 170 }}>{x.position}</td>
        <td className="table_td" style={{ width: 150 }}>{x.salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
        <td className="table_td" style={{ width: 100 }}>{x.bankAccount}</td>
        <td className="table_td" style={{ width: 150 }}>{x.allowance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
        <td className="table_td" style={{ width: 150 }}>{x.loan.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
        <td className="table_td" style={{ width: 170 }}>{x.joiningDate}</td>
        <td style={{ width: 20 }}>
          <ButtonGroup>
            <a href="# " data-toggle="modal" data-target="#modalSubscriptionForm" onClick={() => onGetStaff(x)}>
              <Button variant="info" size="sm"><i className="far fa-edit prefix" style={{ fontSize: 16 }}></i></Button>
            </a>
            <a href="#myModal" className="trigger-btn" data-toggle="modal">
              <Button variant="danger" size="sm"><i className="far fa-trash-alt" onClick={() => setDeleteId(x.id)} style={{ fontSize: 16 }}></i></Button>
            </a>
            <Link to={`/salary_slip/${x.id}`} target={"_blank"}>
              <Button variant="success" size="sm"><i className="fa fa-print" style={{ fontSize: 16 }}></i></Button>
            </Link>
          </ButtonGroup>
        </td>
      </tr>
    )
  })
  var animateButton = function (e) {
    e.preventDefault();
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
      e.target.classList.remove('animate');
    }, 700);
  };
  var bubblyButtons = document.getElementsByClassName("bubbly-button");

  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }
  return (
    <>
      <div className=" right" style={{ letterSpacing: 1 }} >
        <StaffDatePicker onResetForm={onResetForm}
          onSearch={handleSearch}
          onSearchSubmit={handleSearchSubmit}
          pagination={pagination} />
        <DeleteModal
          deleteId={deleteId}
          onDeleteStaff={handleDeleteStaff}
        />

        <div className={showAll ? "tbody" : "body"}>
          <Table bordered size="sm" id="table-to-xlsx">
            <thead>
              <tr >
                <th style={{ width: 70 }} className="table_th">STT</th>
                <th className="table_th">Code</th>
                <th className="table_th">Name</th>
                <th className="table_th">Phone</th>
                <th className="table_th">Address</th>
                <th className="table_th">Position</th>
                <th className="table_th">Salary</th>
                <th className="table_th">Grade</th>
                <th className="table_th">Allowance</th>
                <th className="table_th">Loan</th>
                <th className="table_th">Joining Date</th>
                {/* <th> <a href="# " className="btn-flip" data-back={showAll ? "Show Part" : "Show All"} data-front={showAll ? "Show Part" : "Show All"} onClick={() => setShowAll(!showAll)}></a></th> */}
                <th><button className="bubbly-button" onClick={() => setShowAll(!showAll)}>{showAll ? "Show Part" : "Show All"}</button>
                  <CSVLink
                    data={staff}
                    filename={"Staff.csv"}
                    className="btn btn-primary"
                    style={{ width : "100%"}}
                  >
                    Export to Excel
                  </CSVLink>
                </th>
              </tr>
            </thead>
            <tbody>
              {loadingList ? staffListLoading : staffList}
            </tbody>
          </Table>
        </div>

        <div style={{ textAlign: "center" }}>
          <Pagination defaultActivePage={1} totalPages={showAll ? 1 : totalPage} onPageChange={handlePageChange} />
        </div>
      </div>
    </>
  )
}
export default List;
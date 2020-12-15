import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { Button, ButtonGroup, Table } from 'react-bootstrap';
import StaffDatePicker from '../DatePicker';
import { Pagination } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import * as action from '../../../reducers/staff';
import StaffListLoading from '../../skeletonLoad/staffListLoading';
import './style.scss';


const PAGE_SIZE = 10;

function List(props) {
  const [pagination, setPagination] = useState({
    page: 0,
    containing: "",
    size: PAGE_SIZE
  })
  const [showAll, setShowAll] = useState(false);
  const { staff, loadingList, totalPage } = useSelector(state => state.staffReducer)
  const handlePage = (event, data) => {
    dispatch(action.onSetStaffRequesting())
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
  }, [pagination]);

  useEffect(() => {
    dispatch(action.onSetStaffRequesting());
    if (showAll) {
      setTimeout(function () {
        dispatch(action.onFetchStaff({ page: 0, containing: "", size: 100 }))
      }, 1200)
    } else {
      setTimeout(function () {
        dispatch(action.onFetchStaff(pagination))
      }, 1200)
    }
  }, [showAll])
  const onResetForm = () => {
    props.onResetForm();
  }
  let staffList = staff.map((x, index) => {
    return (
      <tr className="table_staff" key={x.id}>
        <td className="table_td">{index + 1}</td>
        <td className="table_td">{x.staffName}</td>
        <td className="table_td">{x.phone}</td>
        <td className="table_td">{x.position}</td>
        <td className="table_td">{x.salary} mil $</td>
        <td className="table_td">{x.bankAccount}</td>
        <td className="table_td" >{x.joiningDate}</td>
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
        <StaffDatePicker onResetForm={onResetForm} />
        <div className="sk-fading-circle">
          <div className="sk-circle1 sk-circle"></div>
          <div className="sk-circle2 sk-circle"></div>
          <div className="sk-circle3 sk-circle"></div>
          <div className="sk-circle4 sk-circle"></div>
          <div className="sk-circle5 sk-circle"></div>
          <div className="sk-circle6 sk-circle"></div>
          <div className="sk-circle7 sk-circle"></div>
          <div className="sk-circle8 sk-circle"></div>
          <div className="sk-circle9 sk-circle"></div>
          <div className="sk-circle10 sk-circle"></div>
          <div className="sk-circle11 sk-circle"></div>
          <div className="sk-circle12 sk-circle"></div>
        </div>
        <div className={showAll ? "tbody" : ""}>
          <Table bordered size="sm" >
            <thead>
              <tr >
                <th style={{ width: 70 }} className="table_th">STT</th>
                <th className="table_th">Name</th>
                <th className="table_th">Phone Number</th>
                <th className="table_th">Position</th>
                <th className="table_th">Salary</th>
                <th className="table_th">Bank Account</th>
                <th className="table_th">Joining Date</th>
                <th> <a href="#" className="btn-flip" data-back={showAll ? "Show Part" : "Show All"} data-front={showAll ? "Show Part" : "Show All"} onClick={() => setShowAll(!showAll)}></a></th>
                {/* <button className="bubbly-button" onClick={()=>setShowAll(!showAll)}>{showAll ? "Show Part" : "Show All" }</button> */}
              </tr>
            </thead>
            <tbody>
              {loadingList ? staffListLoading : staffList}
            </tbody>
          </Table>
        </div>

        <div style={{ textAlign: "center" }}>
          <Pagination defaultActivePage={1} totalPages={showAll ? 1 : totalPage} onPageChange={handlePage} />
        </div>
      </div>
    </>
  )
}
export default List;
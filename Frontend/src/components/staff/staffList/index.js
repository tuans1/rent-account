
import moment from 'moment';
import React, { useState } from 'react';
import { Button, ButtonGroup, Table } from 'react-bootstrap';
import StaffDatePicker from '../staffDatePicker';
import { Pagination } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import {
  Bar
} from 'react-chartjs-2';


function StaffList() {
  const [totalPages, setTotalPages] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  const change = (event, data) => {
    setCurrentPage(data.activePage)
  }

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data:12,
        backgroundColor: 
            'rgba(255, 99, 132, 0.7)',
        // borderColor: [
        //     'rgba(255, 99, 132, 1)',
        //     'rgba(54, 162, 235, 1)',
        //     'rgba(255, 206, 86, 1)',
        //     'rgba(75, 192, 192, 1)',
        //     'rgba(153, 102, 255, 1)',
        //     'rgba(255, 159, 64, 1)'
        // ],
        // borderWidth: 1
    }],
    datasets: [{
      label: '# of Votes',
      data:52,
      backgroundColor: 
      'rgba(54, 162, 235, 1)',
      // borderColor: [
      //     'rgba(255, 99, 132, 1)',
      //     'rgba(54, 162, 235, 1)',
      //     'rgba(255, 206, 86, 1)',
      //     'rgba(75, 192, 192, 1)',
      //     'rgba(153, 102, 255, 1)',
      //     'rgba(255, 159, 64, 1)'
      // ],
      // borderWidth: 1
  }]
}
  return (
    <>
      <div className="col-xl-10 col-lg-12 col-xs-12 col-md-12 col-sm-12 right">
        <StaffDatePicker />
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
        <div style={{ textAlign: "center" }}>
          <Pagination defaultActivePage={5} totalPages={5} onPageChange={change} />
        </div>
        <div className="col-xl-8">
          <Bar data={data} />
        </div>
      </div>
    </>
  )

}
export default StaffList;
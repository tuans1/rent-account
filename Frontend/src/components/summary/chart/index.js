import React from 'react';

import './style.scss';
import Charts from 'react-apexcharts';

export default function Chart() {
  const state = {
    series: [{
      name: 'Doanh thu',
      data: [93500000, 86035000, 53060000, 67030060, 74095000, 27085900, 85908300, 58260000, 68826000, 44059000, 70960000, 60000000]
    }],
    options: {
      chart: {
        height: 700,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'center', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        },
        offsetY: 40,
        style: {
          fontSize: '12px',
          colors: ["white"]
        }
      },
      xaxis: {
        categories: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
        position: 'top',
        axisBorder: {
          show: true
        },
        axisTicks: {
          show: true
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 120],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: true
        },
        axisTicks: {
          show: true,
        },
        labels: {
          show: true,
          formatter: function (val) {
            // let digits = val.toString().split('');
            // let sliceDigits = digits.slice(0,3);
            // let joinDigits = sliceDigits.join("")
            // console.log(sliceDigits)
            if (val !== 0 && val !== 100000000) {
              return val.toString().split('').slice(0, 2).join("")  + " Triệu";
            }
            else if (val === 100000000) {
              return val.toString().split('').slice(0, 3).join("")  + " Triệu"
            }
            else {
              return val;
            }
          }
        }

      },
      title: {
        // text: 'Total Profit 2020',
        // floating: false,
        // offsetY: 700,
        // align: 'center',
        // style: {
        //   color: 'red', fontSize: '10px',
        // }
      }
    },
  }

  return (
    <>
      <div className="chart  right">
        <div className="col-xl-3">
          <h1>Tổng Doanh Thu Năm 2020 : 725.000.000 đ</h1>
          <div className="card-box bg-green">
            <div className="inner">
              <h3> ₹185358 </h3>
              <p> Today’s Collection </p>
            </div>
            <div className="icon">
              <i className="fa fa-money" aria-hidden="true"></i>
            </div>
            <p className="card-box-footer">View More <i className="fa fa-arrow-circle-right"></i></p>
          </div>
          <div className="card-box bg-red">
            <div className="inner">
              <h3> 723 </h3>
              <p> Faculty Strength </p>
            </div>
            <div className="icon">
              <i className="fa fa-users"></i>
            </div>
            <p className="card-box-footer">View More <i className="fa fa-arrow-circle-right"></i></p>
          </div>
        </div>
        <div className="col-xl-9 col-lg-12 col-md-12" >
          <Charts options={state.options} series={state.series} type="bar" height={400} />
          <div className="chart_title">
            <h3>TOTAL PROFIT </h3>
          </div>
        </div>
      </div>
    </>
  )
}

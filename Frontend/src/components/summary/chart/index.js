import React,{useState} from 'react';

import './style.scss';
import Charts from 'react-apexcharts';

export default function Chart() {
    const [state,setState] = useState({
        series: [{
            name: 'Doanh thu',
            data: [93, 86, 53, 67, 74,27, 83, 86, 68, 84, 75, 99]
          }],
          options: {
            chart: {
              height: 350,
              type: 'bar',
            },
            plotOptions: {
              bar: {
                dataLabels: {
                  position: 'top', // top, center, bottom
                },
              }
            },
            dataLabels: {
              enabled: true,
              formatter: function (val) {
                return val + "Triệu";
              },
              offsetY: -20,
              style: {
                fontSize: '12px',
                colors: ["#304758"]
              }
            },
            
            xaxis: {
              categories:  ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
              position: 'top',
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false
              },
              crosshairs: {
                fill: {
                  type: 'gradient',
                  gradient: {
                    colorFrom: '#D8E3F0',
                    colorTo: '#BED1E6',
                    stops: [0, 100],
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
                show: false
              },
              axisTicks: {
                show: false,
              },
              labels: {
                show: false,
                formatter: function (val) {
                  return val + "Triệu";
                }
              }
            
            },
            title: {
              text: 'Total Profit 2020',
              floating: true,
              offsetY: 330,
              fontSize: '20px',
              align: 'center',
              style: {
                color: '#444'
              }
            }
          },
    })
    // const data = {
    //     labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
    //     datasets: [{
    //         label: 'Tổng tiền ',

    //         data: [62, 72, 15, 72, 54, 62, 55, 27, 90, 12, 85, 46],
    //         backgroundColor:
    //             'rgba(255, 99, 132, 0.7)',
    //         borderColor: [
    //             'rgba(255, 99, 132, 1)',
    //             'rgba(54, 162, 235, 1)',
    //             'rgba(255, 206, 86, 1)',
    //             'rgba(75, 192, 192, 1)',
    //             'rgba(153, 102, 255, 1)',
    //             'rgba(255, 159, 64, 1)'
    //         ],
    //         borderWidth: 1
    //     }],
    // }

    // const options = {            
    //     formatter: function (val,context) {
    //             return val + "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"
    //           },
    //     title: {
    //         display: true,
    //         text: "BIỂU ĐỒ DOANH THU NĂM 2020",
    //         fontSize: 20
    //     },
    //     tooltips: {
    //         mode: 'index',
    //         intersect: false
    //     },
    //     legend: {
    //         display: false,
    //     },
    //     responsive: true,

    // }
    return (
        <>
            <div className="chart d-flex">
                <div className="col-xl-3">
                    <h1>Tổng Doanh Thu Năm 2020 : 725.000.000 đ</h1>
                </div>
                <div className="col-xl-9">
                <Charts options={state.options} series={state.series} type="bar" height={350} />
                </div>  
            </div>
        </>
    )
}

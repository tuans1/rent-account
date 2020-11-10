import React,{useState} from 'react';

import './style.scss';
import Charts from 'react-apexcharts';

export default function Chart() {
    const [state,setState] = useState({
        series: [{
            name: 'Doanh thu',
            data: [93500000, 86035000, 53060000, 67030060, 74095000,27085900, 85908300, 58260000, 68826000, 44059000, 70960000, 60000000]
          }],
          options: {
            chart: {
              height: 500,
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
              offsetY: -20,
              style: {
                fontSize: '12px',
                colors: ["black"]
              }
            },  
            xaxis: {
              categories:  ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
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
                 if(val !== 0 && val !== 100000000){
                  return val.toString().split('').slice(0,2).join("") + "\xa0"+" Triệu";
                 }
                 else if(val === 100000000){
                   return val.toString().split('').slice(0,3).join("") + "\xa0"+" Triệu"
                 }
                 else{
                   return val;
                 }
                }
              }
            
            },
            title: {
              text: 'Total Profit 2020',
              floating: false,
              offsetY: 500,
              align: 'center',
              style: {
                color: 'red', fontSize: '10px',
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
            <div className="chart col-xl-10">
                <div className="col-xl-3">
                    <h1>Tổng Doanh Thu Năm 2020 : 725.000.000 đ</h1>
                </div>
                <div className="col-xl-9 col-lg-12 col-md-12">
                <Charts options={state.options} series={state.series} type="bar" height={400} />
                <div className="chart_title">
                  <h3>TOTAL PROFIT </h3>
                </div>
                </div>  
            </div>
        </>
    )
}

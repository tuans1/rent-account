
import React, { useReducer, useState ,useEffect } from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import { DateRangeInput, DateSingleInput } from '@datepicker-react/styled';
import { ThemeProvider } from "styled-components";
import moment from 'moment';
import './style.scss';
import * as action from '../../../reducers/staff';



const initialState = {
    startDate: null,
    endDate: null,
    focusedInput: null,
}

function reducer(state, action) {
    switch (action.type) {
        case 'focusChange':
            return { ...state, focusedInput: action.payload }
        case 'dateChange':
            return action.payload
        default:
            throw new Error()
    }
}

function StaffDatePicker(props) {
    // const dispatch = useDispatch();
    const {totalSalary} = useSelector(state=>state.staffReducer);
    const [state, dispatch] = useReducer(reducer, initialState);
    let m1 = moment(state.startDate, 'DD-MM-YYYY ');
    let m2 = moment(state.endDate, 'DD-MM-YYYY ');
    let m3 = m2.diff(m1, 'minutes');
    // let m4 = m2.diff(m1, 'h');
    const {Salary,setSalary} = useState() 
    let numDays = Math.floor(m3 / 1440);
    function onResetForm(){
        props.onResetForm();
    }
    let money = totalSalary.map(x=> (x /26) * numDays)
    let total = 0;
    let i = money.map(x=>total += x)
    return (
        <>
            <div className="d-flex" style={{ alignItems: "center" }}>
                <div className="col-xl-5 col-lg-5 col-md-5">
                    <a href="#modalSubscriptionForm" data-toggle="modal" onClick={onResetForm}>
                        <button  className="buttons pulse">Thêm mới Nhân viên</button>
                    </a>
                </div>
                <div className="col-lg-5 col-xl-4 col-md-5">
                    <div className="card  test mask rgba-white-slight view overlay">
                        {/* <div class="">
                    <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Slides/img%20(100).jpg"
                        alt="Card image cap" />
                    <a href="#!">
                        <div class="mask rgba-white-slight"></div>
                    </a>
                </div> */}
                        <div className="card-body">
                            <h4 className="card-title">Tổng số ngày làm việc : {isNaN(numDays) ? "0" : numDays} </h4>
                            <h4 className="card-title">Tổng lương : {total ? total.toFixed(1) : "0.0"} mil $</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex" style={{ alignItems: "center" }}>
                <div className="col-xl-5 col-lg-5 col-md-5">
                    <form className="form-inline md-form form-sm active-pink active-pink-2 mt-2">
                        <i className="fas fa-search" aria-hidden="true" onClick={() => alert("SEARCH")}></i>
                        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="  Search"
                            aria-label="Search" />
                    </form>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5">
                    <ThemeProvider
                        theme={{
                            breakpoints: ["32em", "48em", "64em"],
                            reactDatepicker: {
                                daySize: [31.5],
                                fontFamily: "system-ui, -apple-system",
                                colors: {
                                    accessibility: "#D80249",
                                    selectedDay: "#f7518b",
                                    selectedDayHover: "#F75D95",
                                    primaryColor: "#d8366f"
                                }
                            }
                        }}
                    >
                        <DateRangeInput
                            onDatesChange={data => dispatch({ type: 'dateChange', payload: data })}
                            onFocusChange={focusedInput => dispatch({ type: 'focusChange', payload: focusedInput })}
                            startDate={state.startDate} // Date or null
                            endDate={state.endDate} // Date or null
                            focusedInput={state.focusedInput} // START_DATE, END_DATE or null
                        />
                    </ThemeProvider>
                </div>
            </div>
        </>
    )

}
export default StaffDatePicker;
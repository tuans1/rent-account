
import { DateRangeInput } from '@datepicker-react/styled';
import { ThemeProvider } from "styled-components";
import moment from 'moment';
import React, { useReducer, useState } from 'react';
import './style.scss';



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

function StaffDatePicker() {
    const [state, dispatch] = useReducer(reducer, initialState)
    var m1 = moment(state.startDate, 'DD-MM-YYYY ');
    var m2 = moment(state.endDate, 'DD-MM-YYYY ');
    var m3 = m2.diff(m1, 'minutes');
    // var m4 = m2.diff(m1, 'h');
    var numdays = Math.floor(m3 / 1440);
    return (
        <>
            <div className="d-flex" style={{ alignItems: "center" }}>
                <div className="col-xl-5 col-lg-5 col-md-5">
                    <a href="#modalSubscriptionForm" data-toggle="modal" >
                        <button type="button" className="btn btn-unique">Thêm mới Nhân viên</button>
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
                            <h4 className="card-title">Tổng số ngày làm việc : {isNaN(numdays) ? "0" : numdays} </h4>
                            <h4 className="card-title">Tổng lương : 0 đ</h4>
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
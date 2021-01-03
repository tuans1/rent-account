
import React, { useReducer } from 'react';
import { useSelector } from 'react-redux';
import { DateRangeInput, } from '@datepicker-react/styled';
import { ThemeProvider } from "styled-components";
import moment from 'moment';
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

function StaffDatePicker(props) {
    const { totalSalary } = useSelector(state => state.staffReducer);
    const [state, dispatch] = useReducer(reducer, initialState);
    let m1 = moment(state.startDate, 'DD-MM-YYYY ');
    let m2 = moment(state.endDate, 'DD-MM-YYYY ');
    let m3 = m2.diff(m1, 'minutes');
    // let m4 = m2.diff(m1, 'h');
    let numDays = Math.floor(m3 / 1440);
    function onResetForm() {
        props.onResetForm();
    }
    function onSearch(key, value) {
        props.onSearch(key, value);
    }
    function calculateTotalMoney() {
        let total = totalSalary.reduce((a, b) => {
            return parseInt(a) + parseInt(b)
        }, 0)
        total = (total / 28) * numDays
        return total.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const searchSubmit = (e) => {
        props.onSearchSubmit();
        e.preventDefault();
    }
    return (
        <>
            <div className="d-flex card-center" style={{ alignItems: "center" }}>
                <div className="col-xl-5 col-lg-5 col-md-5">
                    <a href="#modalSubscriptionForm" data-toggle="modal" onClick={onResetForm}>
                        <button className="buttons pulse">Add New Staff</button>
                    </a>
                </div>
                <div className="col-lg-6 col-xl-4 col-md-4">
                    <div className="card  test mask rgba-white-slight view overlay">
                        <div className="card-body">
                            <h4 className="card-title">Total Days Work : {isNaN(numDays) ? "0" : numDays} </h4>
                            <h4 className="card-title">Total Salary : {calculateTotalMoney()} mil $</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex card-center" style={{ alignItems: "center", paddingTop: 10, paddingBottom: 10 }}>
                <div className="col-xl-5 col-lg-5 col-md-5">
                    <form className="search-wrap" onSubmit={searchSubmit} role="search" autoComplete="off">
                        <label className="lb-search" htmlFor="search">Search for stuff</label>
                        <input className="input-search" id="search" value={props.pagination.containing} type="search" onChange={(e) => onSearch("containing", e.target.value)} placeholder="Search..." autoFocus />
                        <button className="search" type="submit">Search</button>
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
import { React } from 'react';
import { Button } from 'react-bootstrap';
import './style.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Countdown from 'react-countdown';
import ReactMomentCountDown from 'react-moment-countdown';
import moment from 'moment'
import Category from '../Category';
import * as action from '../../reducers/accountReducer';

function Account(props) {
    const dispatch = useDispatch();
    const { accounts } = useSelector(state => state.accountReducer)
    const [rentalTime, setRentalTime] = useState();
    const [isRent, setIsRent] = useState();
    const dateInFuture = moment('2021-05-21 15:34:00').add(2, 'hours');
    useEffect(() => {
        dispatch(action.onFetchAccount());
    }, [])

    const timeLeft = (time, timeUpdate) => {
        const then = moment(new Date(timeUpdate)).add(time, 'hours');
        const now = moment(new Date);
        if (then > now) {
            return <Countdown date={moment(timeUpdate).add(time, 'hours')} />
        } else {
            return (<p>ĐỔI PASS</p>)
        }
    };
    const buttonActive = acc => {
        const then = moment(new Date(acc.updateAt)).add(acc.rentalTime, 'hours');
        const now = moment(new Date);
        if (then > now && acc.isRent) {
            return (<Button className="btn btn-primary btn-rent" style={{ width: "100%" }}>Đang được thuê</Button>)
        } else {
            if (acc.isActive) {
                return (<Button className="btn btn-primary btn-rent" onClick={() => onHandleRent(acc._id)} style={{ width: "100%" }}>Thuê Ngay</Button>)
            } else {
                return (<Button className="btn btn-primary btn-rent" style={{ width: "100%" }}>CHỜ ĐỔI PASS</Button>)
            }
        }

    }
    const setTimeRent = e => {
        setRentalTime(e.target.value)
    }
    const onHandleRent = (accId) => {
        props.onHandleRent({ accId, rentalTime })
    }
    return (
        <>
            <Category />
            <div className="account-wrap">
                <div className="row">
                    <div className="account col-lg-12">
                        {accounts && accounts.map(acc => {
                            return (
                                <div key={acc._id} className="card col-lg-3" style={{ width: '19rem' }}>
                                    <img
                                        src={acc.image}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <div className="card-info">
                                            <div className="row">
                                                <div className="col-lg-8 rent-price">
                                                    <select onChange={(e) => setTimeRent(e)} className="form-select" aria-label="Default select example">
                                                        <option defaultValue value="5">5.000K / 5 giờ</option>
                                                        <option value="10">8.000K / 10 giờ</option>
                                                        <option value="15">10.000K / 15 giờ</option>
                                                        <option value="24">20.000K / 1 ngày</option>
                                                        <option value="1200">60.000K / 5 ngày</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-4 rent-status">
                                                    {acc.isRent ? timeLeft(acc.rentalTime, acc.updateAt) : <p>SẴN SÀNG</p>}
                                                </div>
                                            </div>
                                        </div>
                                        {buttonActive(acc)}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account;
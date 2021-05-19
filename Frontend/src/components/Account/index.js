import { React } from 'react';
import { Button } from 'react-bootstrap';
import './style.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Countdown from 'react-countdown';
import moment from 'moment'
import Gta5 from '../../assets/account/gta5.jpeg';
import Category from '../Category';
import * as action from '../../reducers/accountReducer';

function Account() {
    const dispatch = useDispatch();
    const { accounts } = useSelector(state => state.accountReducer)
    // var date = moment('2021-05-10 22:06:37').add(3,'hours');
    const [countDown, setCountDown] = useState({
        seconds: undefined,
        hours: undefined,
        minutes: undefined
    })
    useEffect(() => {
        dispatch(action.onFetchAccount())
    }, [])
    function timer() {
        setInterval(() => {
            var then = moment('2021-05-10 22:06:37').add(8, 'hours').unix();
            var now = moment(new Date).unix();
            var countdown = moment(then - now);
            var timeLeft = moment.unix(countdown).utcOffset(0).format("HH:mm:ss")
            return timeLeft;
        }, 1000)
    }

    return (
        <>
            <Category />
            <div className="account-wrap">
                <div className="row">
                    <div className="account col-lg-12">
                        {accounts && accounts.map(item => {
                            return (
                                <div key={item._id} className="card col-lg-3" style={{ width: '19rem' }}>
                                    <img
                                        src={Gta5}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <div className="card-info">
                                            <div className="row">
                                                <div className="col-lg-8 rent-price">
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option defaultChecked>Chọn mức giá</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-4 rent-status">
                                                    <p>{timer()}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <Button className="btn btn-primary btn-rent" style={{ width: "100%" }}>Thuê Ngay</Button>
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
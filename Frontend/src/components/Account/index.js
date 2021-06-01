import { React } from 'react';
import { Button } from 'react-bootstrap';
import './style.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactMomentCountDown from 'react-moment-countdown';
import moment from 'moment'
import Category from '../Category';
import * as action from '../../reducers/accountReducer';
import * as priceAction from '../../reducers/priceReducer';
import * as gameAction from '../../reducers/gameReducer';


function Account(props) {
    const dispatch = useDispatch();
    const { accounts } = useSelector(state => state.accountReducer)
    const { prices } = useSelector(state => state.priceReducer)
    const { game } = useSelector(state => state.gameReducer)
    const [rentalTime, setRentalTime] = useState();
    useEffect(() => {
        dispatch(action.onFetchAccount());
        dispatch(priceAction.onFetchPrice())
        dispatch(gameAction.onFetchGame())
    }, [])

    const timeLeft = (time, timeUpdate) => {
        const then = moment(new Date(timeUpdate)).add(time, 'hours');
        const now = moment(new Date);
        if (then > now) {
            return <ReactMomentCountDown toDate={then} />
        } else {
            return ("ĐỔI PASS")
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
        // setRentalTime("");
        if (localStorage.getItem("id")) {
            props.onHandleRent({ accId, rentalTime })
        } else {
            alert("VUI LÒNG ĐĂNG NHẬP")
        }
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
                                                    <select defaultValue="" onChange={(e) => setTimeRent(e)} className="form-select" aria-label="Default select example">
                                                        <option value="" disabled="disabled">Chọn Mức Giá</option>
                                                        {prices.map(price => {
                                                            return (
                                                                <option key={price._id} value={JSON.stringify({ time: price.time, price: price.price })}>{price.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ / {price.time} giờ</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="col-lg-4 rent-status">
                                                    {acc.isRent ? <p style={{ color: "red" }}>{timeLeft(acc.rentalTime, acc.updateAt)}</p> : <p style={{ color: "green" }}>SẴN SÀNG</p>}
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
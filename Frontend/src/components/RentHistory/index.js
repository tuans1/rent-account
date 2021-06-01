import moment from 'moment';
import { React } from 'react';


function RentHistory(props) {



    return (
        <>
            <h1>LỊCH SỬ THUÊ ACC</h1>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">acc</th>
                        <th scope="col">name</th>
                        <th scope="col">pw</th>
                        <th scope="col">THỜI GIAN THUÊ</th>
                        <th scope="col">Từ</th>
                        <th scope="col">Đến</th>
                    </tr>
                </thead>
                <tbody>
                    {props.histories && props.histories.map((history, i) => {
                        return (
                            <tr key={history._id}>
                                <th scope="row">{i + 1}</th>
                                <td>{history.acc}</td>
                                <td>{history.name}</td>
                                <td>{history.password}</td>
                                <td>{history.time} Giờ</td>
                                <td>{moment(history.createAt).format("DD-MM-YYYY HH:mm:ss")}</td>
                                <td>{moment(history.createAt).add(history.time, 'hours').format("DD-MM-YYYY HH:mm:ss")}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default RentHistory;
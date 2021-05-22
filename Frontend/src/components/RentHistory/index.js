import { React } from 'react';


function RentHistory(props) {

    console.log(props)

    return (
        <>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">acc</th>
                        <th scope="col">name</th>
                        <th scope="col">pw</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {props.histories && props.histories.map((acc, i) => {
                        return (
                            <tr key={acc._id}>
                                <th scope="row">{i + 1}</th>
                                <td>{acc.acc}</td>
                                <td>{acc.name}</td>
                                <td>{acc.password}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default RentHistory;
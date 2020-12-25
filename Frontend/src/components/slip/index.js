import React from 'react';

export default class Slip extends React.Component {
    render() {
        const { address, bankAccount, id, joiningDate, phone, position, salary, staffName } = this.props.staff;
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1">
                            <p>OK</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

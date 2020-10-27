import React from 'react';


function StaffForm(params) {

    const submitStaffForm = (e) => {
        console.log(e)
        e.preventDefault();
    }

    return (
        <>
                <div className="modal fade" id="modalSubscriptionForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h4 className="modal-title w-100 font-weight-bold">Subscribe</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body mx-3">
                                <div className="md-form mb-5">
                                    <i className="fas fa-user prefix grey-text"></i>
                                    <input type="text" id="form3" className="form-control validate" autoComplete="off"/>
                                    <label data-error="wrong" data-success="right" >Name</label>
                                </div>
                                <div className="md-form mb-4">
                                    <i className="fas fa-mobile-alt prefix grey-text"></i>
                                    <input type="text" id="form2" className="form-control validate"  autoComplete="off"/>
                                    <label data-error="wrong" data-success="right">Phone Number</label>
                                </div>
                                <div className="md-form mb-4">
                                    <i className="fas fa-mobile-alt prefix grey-text"></i>
                                    <input type="text" id="form4" className="form-control validate" autoComplete="off"/>
                                    <label data-error="wrong" data-success="right" >Position</label>
                                </div>
                                <div className="md-form mb-4">
                                    <i className="fas fa-mobile-alt prefix grey-text"></i>
                                    <input type="text" id="form5" className="form-control validate" autoComplete="off"/>
                                    <label data-error="wrong" data-success="right" >Salary</label>
                                </div>
                                <div className="md-form mb-4">
                                    <i className="fas fa-mobile-alt prefix grey-text"></i>
                                    <input type="text" id="form6" className="form-control validate" autoComplete="off"/>
                                    <label data-error="wrong" data-success="right" >Bank Account</label>
                                </div>
                                <div className="md-form mb-4">
                                    <i className="fas fa-mobile-alt prefix grey-text"></i>
                                    <input type="text" id="form7" className="form-control validate" autoComplete="off"/>
                                    <label data-error="wrong" data-success="right" >Joining Date</label>
                                </div>
                            </div>
                            <div className="modal-footer d-flex justify-content-center">
                                <button onClick={submitStaffForm} className="btn btn-indigo">Send <i className="fas fa-paper-plane-o ml-1"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default StaffForm;
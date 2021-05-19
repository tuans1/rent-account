import { React, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Modal from 'react-bootstrap/Modal';


export default function AdminGame(props) {
    const [show, setShow] = useState(false);


    const handleClose = () => {
        // setAccount({
        //     ...DEFAULT_STATE
        // })
        setShow(false);
    };
    const handleShow = () => {
        // reset();
        setShow(true);  
    };
    return (
        <>
            <div className="container">
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        {/* <Modal.Title>{account._id ? "Xoá tài khoản" : watch("id") ? "Sửa tài khoản" : "Thêm tài khoản"}</Modal.Title> */}
                    </Modal.Header>
                    <Modal.Body>
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Hủy</Button>
                        {/* {account._id ? <Button variant="warning" onClick={onDeleteAccount}>Xóa</Button> */}
                            {/* : <Button variant="primary" type="submit" form="hook-form"  >Save Changes</Button>} */}
                    </Modal.Footer>
                </Modal>
                <button type="button" className="btn btn-info" onClick={handleShow} style={{ float: 'right' }}>Thêm Mới</button>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">GAME</th>
                            <th scope="col">IMAGE</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    {/* <tbody>
                        {props.accountsList && props.accountsList.map((acc, i) => {
                            return (
                                <tr key={acc._id}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{acc.acc}</td>
                                    <td>{acc.name}</td>
                                    <td><Button onClick={() => onSetEditAccount(acc)}>Sửa</Button><Button onClick={() => onSetDeleteAccount(acc)}>Xoa</Button></td>
                                </tr>
                            )
                        })}
                    </tbody> */}
                </table>
            </div>
        </>
    )
}
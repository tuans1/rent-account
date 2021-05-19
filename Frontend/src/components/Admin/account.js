import { React, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Modal from 'react-bootstrap/Modal';

const DEFAULT_STATE = {
    _id: ""
}

export default function AdminAccount(props) {
    const [show, setShow] = useState(false);
    const [account, setAccount] = useState({});
    const { register, formState: { errors }, handleSubmit, watch, setValue, reset } = useForm();
    const onSubmit = account => {
        props.onSubmit(account);
        setShow(false);
    };
    const handleClose = () => {
        setAccount({
            ...DEFAULT_STATE
        })
        setShow(false);
    };
    const handleShow = () => {
        reset();
        setShow(true);
    };
    const onSetEditAccount = (acc) => {
        setShow(true)
        setValue("name", acc.name);
        setValue("acc", acc.acc);
        setValue("id", acc._id);
        setValue("password", acc.password);
        setValue("game", acc.game);
    }
    const onSetDeleteAccount = acc => {
        setShow(true);
        setAccount({
            ...acc
        })
    }
    const onDeleteAccount = () => {
        props.onDeleteAccount(account._id);
        setShow(false);
    }
    return (
        <>
            <div className="container">
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>{account._id ? "Xoá tài khoản" : watch("id") ? "Sửa tài khoản" : "Thêm tài khoản"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {account._id ? `Bạn có chắc chắn xóa Tài khoản : ${account.acc}`
                            : <form id="hook-form" onSubmit={handleSubmit(onSubmit)}>
                                {watch("id") &&
                                    <div className="mb-3">
                                        <label className="form-label">Acc</label>
                                        <input className="form-control" {...register("acc", { required: true })} />
                                        <span style={{ color: 'red' }}>{errors.acc?.type === 'required' && "acc is required !"}</span>
                                    </div>
                                }
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input className="form-control" {...register("name", { required: true })} />
                                    <span style={{ color: 'red' }}>{errors.name?.type === 'required' && "name is required !"}</span>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" {...register("password", { required: true })} />
                                    <span style={{ color: 'red' }}>{errors.password?.type === 'required' && "Password is required !"}</span>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Game</label>
                                    <select className="form-select" disabled={watch("id") ? true : false} {...register("game", { required: true })}>
                                        {/* <option defaultValue value="">Chọn Game</option> */}
                                        <option value="PUBG">PUBG</option>
                                        <option value="GTA">GTA V</option>
                                        <option value="LOL">LOL</option>
                                    </select>
                                    <span style={{ color: 'red' }}>{errors.game?.type === 'required' && "Please choose Game !"}</span>
                                </div>
                            </form>}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Hủy</Button>
                        {account._id ? <Button variant="warning" onClick={onDeleteAccount}>Xóa</Button>
                            : <Button variant="primary" type="submit" form="hook-form"  >Save Changes</Button>}
                    </Modal.Footer>
                </Modal>
                <button type="button" className="btn btn-info" onClick={handleShow} style={{ float: 'right' }}>Thêm Mới</button>
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
                        {props.accountsList && props.accountsList.map((acc, i) => {
                            return (
                                <tr key={acc._id}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{acc.acc}</td>
                                    <td>{acc.name}</td>
                                    <td>{acc.password}</td>
                                    <td><Button onClick={() => onSetEditAccount(acc)}>Sửa</Button><Button onClick={() => onSetDeleteAccount(acc)}>Xoa</Button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

import { React, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Modal from 'react-bootstrap/Modal';
import './style.css';
const DEFAULT_STATE = {
    _id: ""
}
export default function AdminGame(props) {
    const [show, setShow] = useState(false);
    const { register, formState: { errors }, watch, setValue, handleSubmit, reset } = useForm();
    const [game, setGame] = useState({});
    const [imagePreview, setImagePreview] = useState();

    const onSubmit = game => {
        props.onSubmit(game);
        setShow(false);
    };
    const handleClose = () => {
        setGame({
            ...DEFAULT_STATE
        })
        setShow(false);
    };
    const handleShow = () => {
        reset();
        setShow(true);
    };
    const onSetDeleteGame = game => {
        setShow(true);
        setGame({
            ...game
        })
    }
    const onDeleteGame = () => {
        props.onDeleteGame(game._id);
        setShow(false);
    }
    const handleChangeImage = e => {
        setImagePreview(URL.createObjectURL(e.target.files[0]))
        setValue("image", e.target.files[0])
    }

    return (
        <>
            <div className="container">
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>{game._id ? "Xoá GAME" : "Thêm GAME"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {game._id ? `Bạn có chắc chắn xóa Game: ${game.name}`
                            : <form id="hook-form" onSubmit={handleSubmit(onSubmit)}>
                                {/* <div className="mb-3">
                                    <label className="form-label">name</label>
                                    <input className="form-control" {...register("name", { required: true })} />
                                    <span style={{ color: 'red' }}>{errors.name?.type === 'required' && "name is required !"}</span>
                                </div> */}
                                <div className="mb-3">
                                    <input type="file" id="img" name="img" accept="image/*" className="w-100" onChange={(e) => handleChangeImage(e)} />
                                    <img src={imagePreview} />
                                </div>
                            </form>
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Hủy</Button>
                        {game._id ? <Button variant="warning" onClick={onDeleteGame}>Xóa</Button>
                            : <Button variant="primary" type="submit" form="hook-form"  >Save Changes</Button>}
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
                    <tbody>
                        {props.gameList && props.gameList.map((game, i) => {
                            return (
                                <tr key={game._id}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{game.name}</td>
                                    <td>{game.img}</td>
                                    <td><Button onClick={() => onSetDeleteGame(game)}>Xoa</Button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
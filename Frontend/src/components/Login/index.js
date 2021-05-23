import { React, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import './style.css';
export default function Login(props) {
    const { register, formState: { errors }, setValue, handleSubmit, reset } = useForm();
    const { isLogin } = useSelector(state => state.adminReducer);
    const history = useHistory();
    const onSubmit = login => {
        props.onSubmit(login);
    }
    // khi login thành công sẽ chuyển về trang chủ
    useEffect(() => {
        if (localStorage.getItem("id") && localStorage.getItem("role") === "user") {
            history.push("/");
        }
        if (localStorage.getItem("id") && localStorage.getItem("role") === "admin") {
            history.push("/admin");
        }
    }, [isLogin])
    return (
        <>
            <div className="login-wrap"  style={{ textAlign: "center",width:"300px",position:'relative',left:"35%" }}>
                <h1>ĐĂNG NHẬP</h1>
                <form id="hook-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label className="form-label">name</label>
                        <input className="form-control" {...register("name", { required: true })} />
                        <span style={{ color: 'red' }}>{errors.name?.type === 'required' && "name is required !"}</span>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">password</label>
                        <input type="password" className="form-control" {...register("password", { required: true })} />
                        <span style={{ color: 'red' }}>{errors.password?.type === 'required' && "password is required !"}</span>
                    </div>
                    <Button type="submit" form="hook-form" >ĐĂNG NHẬP</Button>
                </form>
            </div>
        </>
    )
}
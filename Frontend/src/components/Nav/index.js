import { Button } from 'bootstrap';
import { React } from 'react';
import './style.css'

function Nav() {
    return (
        <div className="banner">
            <div className="container">
                {/* <!-- Navbar --> */}
                <nav className="navbar navbar-expand-lg ">
                    {/* <!-- Container wrapper --> */}
                    <div className="container-fluid">
                        {/* <!-- Navbar brand --> */}
                        <a className="navbar-brand" href="#">LOGO</a>
                        {/* <!-- Toggle button --> */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fas fa-bars"></i>
                        </button>

                        {/* <!-- Collapsible wrapper --> */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* <!-- Left links --> */}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Nạp thẻ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Hướng dẫn thuê Acc</a>
                                </li>
                                {/* <!-- Navbar dropdown --> */}
                                <li className="nav-item">
                                    <a className="nav-link" href="#" tabIndex="-1"
                                    >Liên Hệ</a>
                                </li>
                            </ul>
                            {/* <!-- Left links -->
                            <!-- Search form --> */}
                            <form className="d-flex input-group w-auto">
                                <input
                                    type="search"
                                    className="form-control"
                                    placeholder="Type query"
                                    aria-label="Search"
                                />
                                <button
                                    className="btn btn-outline-primary"
                                    type="button"
                                    data-mdb-ripple-color="dark">Search</button>
                                <h4 style={{ color: 'white' }}>Đăng Nhập</h4>
                            </form>
                        </div>
                        {/* <!-- Collapsible wrapper --> */}
                    </div>
                    {/* <!-- Container wrapper --> */}
                </nav>
                {/* <!-- Navbar --> */}
            </div>
        </div>
    )
}

export default Nav;
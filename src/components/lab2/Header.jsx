import { SearchOutlined } from '@ant-design/icons';
import React from 'react'

const Header = () => {
    return (
        <div className="container">
            <div className="row row-header">
                <nav className="navbar navbar-dark navbar-expand-sm fixed-top" style={{ backgroundColor: '#252327' }}>
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand mr-auto" href="#1">Pizza House</a>
                        <div className="collapse navbar-collapse d-flex justify-content-between" id="Navbar">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active"><a className="nav-link" href="#1"><span
                                    className="fa fa-home fa-lg"></span> Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="./aboutus.html"><span
                                    className="fa fa-info fa-lg"></span> About us</a></li>
                                <li className="nav-item"><a className="nav-link" href="./contactus.html"><span
                                    className="fa fa-address-card fa-lg"></span> Contact</a></li>
                            </ul>
                            <div className="navbar-nar d-flex justify-content-end ">
                                <input className="rounder" type="text" placeholder="Search ..." />
                                <span>
                                    <button type="button" className="btn btn-danger ">
                                        <SearchOutlined />
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        </div>
    )
}

export default Header
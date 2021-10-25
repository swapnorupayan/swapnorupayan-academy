
import React from 'react';

import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light " fixed="top" style={{ backgroundColor: 'lemon' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home"> <span className='Swapnorupayan'>Swapnorupayan</span>      <span className='Academy'><small>Academy</small></span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active " style={{ fontSize: '20px', fontWeight: "bolder", color: 'Black' }} aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/allcourse" style={{ fontSize: '20px', fontWeight: "bolder", color: 'Black' }}>All Course</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact" style={{ fontSize: '20px', fontWeight: "bolder", color: 'Black' }}>Contact Us </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" style={{ fontSize: '20px', fontWeight: "bolder", color: 'Black' }}>About Us</Link>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;


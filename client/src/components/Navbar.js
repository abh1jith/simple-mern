import React from 'react';
import { Link } from "react-router-dom";


function Navbar(){
    return (
    <nav className="navbar  navbar-dark bg-light">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
            <li className="nav-item">
                <Link to="/" >Welcome Page</Link>
            </li>
            <li className="nav-item">
                <Link to="create">Create User</Link>
            </li>
            <li className="nav-item">
                <Link to="/get">Get Users</Link>
            </li>
        </ul>
    </nav>);
};

export default Navbar;
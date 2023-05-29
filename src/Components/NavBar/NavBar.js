import React from 'react';
import {Link} from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">Pray4Me</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarColor02"
                        aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <li className='nav-link'>
                            <Link to='/' className="nav-link">Home</Link>
                        </li>
                        <li className='nav-link'>
                            <Link to='/pray' className="nav-link">Pray</Link>
                        </li>
                        <li className='nav-link'>
                            <Link to='/request-prayer' className="nav-link">Request Prayer</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-sm-2" type="search" placeholder="Search"/>
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
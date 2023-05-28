import React from 'react';
import logo from '../../Assets/pray4me-logo.png';
import './Home.css';

const Home = () => {
    return (
        <div className='page'>
            <div className="logo">
                <img src={logo} alt="Logo"/>
            </div>
            <div className="button-bar">
                <button className="btn btn-warning">Pray</button>
                <button className="btn btn-success">Request Prayer</button>
            </div>

        </div>
    );
};

export default Home;
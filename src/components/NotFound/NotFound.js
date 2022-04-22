import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container d-flex flex-column text-center w-25'>
            <img className='img-fluid ' src="images/404.gif" alt="" />
            <button className='btn btn-outline-info' ><Link to="/home" className='text-decoration-none text-black'>Back to Homepage</Link></button>
        </div>
    );
};

export default NotFound;
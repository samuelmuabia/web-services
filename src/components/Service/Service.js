import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

const Service = (props) => {
    const { img, name, details, price } = props.service;
    return (
        <div className='col'>

            <div className="card h-100">
                <img src={img} className="card-img-top img-fluid h-75 p-5 pb-1" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{details}</p>
                    <p className="card-text fs-3 text-warning">$ {price}</p>
                    <LinkContainer to="/checkout">
                        <button className='btn btn-dark'>Check Now</button>
                    </LinkContainer>

                </div>
            </div>
        </div>
    );
};

export default Service;
import React from 'react';

const Works = (props) => {
    const { img, workName, Link } = props.work;
    return (
        <div>
            <div className="col text-center">
                <div className="card">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title my-3">{workName}</h5>
                        <a className='btn btn-outline-dark text-decoration-none' href={Link} target="_blank" rel="noreferrer">Visit Site</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;
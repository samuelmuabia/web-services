import React from 'react';

const About = () => {
    return (
        <div className='container my-5'>
            <h1 className="text-center mb-3">About Me</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center align-items-center">
                <div className='col'>
                    <h3 className='my-5'>Hello, I am Samuel</h3>
                    <p>I have been learing and developing website for 6 months.In this time I have experienced in HTML,CSS,Bootstrap,Tailwind,JavaScript and React Framework. I want to develop myself more and want to learn more.</p>
                </div>
                <div className='d-block text-center p-5  ' style={{ height: "500px" }}>
                    <img className='img-fluid h-100 w-50 rounded-2' src="images/person-1.jpg" alt="" />
                </div>

            </div>
        </div>
    );
};

export default About;
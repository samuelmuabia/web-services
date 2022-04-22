import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h1 className='text-center my-5' >Blog</h1>
            <h4>1.Difference between <strong>authorization</strong> and <strong>authentication</strong></h4>
            <p>Authentication is the process of confirming a user's identity, whereas authorization is the process of confirming their access rights.Authentication is done before Authorization. An Example : Like in Programming hero website first we have to login for authentication and after that if this logged in account has purchased course from programming hero then this account is authorized to access the videos otherwise not.</p>
        </div>
    );
};

export default Blog;
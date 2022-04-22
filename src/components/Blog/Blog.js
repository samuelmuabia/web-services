import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h1 className='text-center my-5' >Blog</h1>
            <h4>1.Difference between <strong>authorization</strong> and <strong>authentication</strong></h4>
            <p>Authentication is the process of confirming a user's identity, whereas authorization is the process of confirming their access rights.Authentication is done before Authorization. An Example : Like in Programming hero website first we have to login for authentication and after that if this logged in account has purchased course from programming hero then this account is authorized to access the videos otherwise not.</p>
            <h4>2. Why are you using `firebase`? What other options do you have to implement authentication?</h4>
            <p>Google's app development platform is called Firebase. It  assists  in developing, improving, and scaling the application in a streamlined and consistent manner. I am using fireebase first of all it is free and here i can host my website too. It has a nice documentation and react firebase hooks also make things easy for me too.
                There are some alternatives to Firebase : Parse, Back4App, Aws Amplify, Kuzzle , Couchbase and etc....
            </p>
            <h4>3. What other services does `firebase` provide other than authentication</h4>
            <p>There are many services which Firebase provides, Most useful of them are:

                <ol>
                    <li>Cloud Firestore</li>
                    <li> Cloud Functions</li>
                    <li> Cloud Messaging</li>
                    <li>Hosting</li>
                    <li> Cloud Storage</li>
                    <li>Google Analytics</li>
                    <li> Predictions</li>
                    <li> Dynamic Links</li>
                    <li>Remote Config</li>
                </ol>
                </p>
        </div>
    );
};

export default Blog;
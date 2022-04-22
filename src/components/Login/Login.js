import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const navigateSignup = () => {
        navigate('/signup');
    }
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [user1] = useAuthState(auth);
    if (error) {
        const msg = error?.message;
        if (msg.search('auth/wrong-password') !== -1) {
            errorElement = <p className='text-danger'>Wrong password ! Please enter correct password and try again. </p>
        }
        else if (msg.search('auth/user') !== -1) {
            errorElement = <p className='text-danger'>Email not Found . Please try again.</p>
        }
        else {
            errorElement = <p className='text-danger'>{msg}</p>
        }
    }
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
        auth
    );
    const resetHandle = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('email has been sent');
        }
        else{
            toast('Please enter email address');
        }

    }
    if (user || user1) {
        navigate(from, { replace: true });
    }
    return (
        <div className='container  w-50'>
            <h1 className='text-center my-5'>Login</h1>
            <div >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password}
                        onChange={(e) => setPassword(e.target.value)} type="password" name="pass" placeholder="Password" required />
                </Form.Group>
                {errorElement}
                <Button onClick={() => signInWithEmailAndPassword(email, password)} variant="primary" name="submit" type="submit"> {
                    loading ? <Spinner animation="border" variant="light" /> : "Submit"
                }</Button>
            </div>
            <p>Don't Have any Account? <Link to="/signup" onClick={navigateSignup} >Register Here</Link> </p>
            <p>Forget Password? <button className=' btn btn-link pe-auto' onClick={resetHandle} >
                {
                    loading ? <Spinner animation="border" variant="light" /> : "Reset Password"
                }</button> </p>
            <ToastContainer />
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-black w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-black w-50'></div>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;
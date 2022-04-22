import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [perrormsg, setPerrormsg] = useState('');
    const [cerrormsg, setCerrormsg] = useState('');
    const [psuccessmsg, setPsuccessmsg] = useState('');
    const [csuccessmsg, setCsuccessmsg] = useState('');
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }
    const [user1] = useAuthState(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      if (user || user1){
        navigate(from,{ replace: true });
    }
      const passTest = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/;

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        if ((passTest.test(password) && password===confirmPassword)) {
            createUserWithEmailAndPassword(email,password);
        }
    };

    const checkPassStrength = (event) => {
        const pass = event.target.value;
        if (passTest.test(pass)) {
            setPerrormsg("");
            setPsuccessmsg("Strong Password");
            setPassword (pass);
        }
        else {
            setPsuccessmsg("");
            setPerrormsg("Please provide a password of atleast 8 characters, one capital letter and one digits");
            setPassword("");
        }
    }
    const passwordMatch =(event)=>{
        const cpass = event.target.value;
        if(password===cpass){
            setCerrormsg("");
            setCsuccessmsg("Password Matched");
            setConfirmPassword(cpass)
        }
        else{
            setCsuccessmsg("");
            setCerrormsg("Password doesn't Match");
            setConfirmPassword("");
        }
    }
    return (

        <div className='w-50 mx-auto'>
            <h1 className='text-center my-5'>Sign Up</h1>
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={checkPassStrength} className={ (perrormsg ? "border-danger" : "") + (psuccessmsg ? "border-success" : "")}  type="password" name="pass" placeholder="Password" required />
                    {perrormsg ? <p className='text-danger'>{perrormsg}</p> : <p className='text-success'>{psuccessmsg}</p>}
                </Form.Group>
                <Form.Group onBlur={passwordMatch} className={"mb-3" + (cerrormsg ? "border-danger" : "") + (csuccessmsg ? "border-success" : "")} controlId="formConfirmBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="cpass" placeholder="Confirm Password"  required/>
                    {cerrormsg ? <p className='text-danger'>{cerrormsg}</p> : <p className='text-success'>{csuccessmsg}</p>}
                </Form.Group>
                <Button variant="primary" type="submit"> {
                    loading ? <Spinner animation="border" variant="light" /> : "Sign Up"
                }</Button>
            </Form>
            <p>Already Have an Account? <Link to="/login" onClick={navigateLogin}>Login</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Signup;
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [perrormsg, setPerrormsg] = useState('');
    const [cerrormsg, setCerrormsg] = useState('');
    const [psuccessmsg, setPsuccessmsg] = useState('');
    const [csuccessmsg, setCsuccessmsg] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {

    };
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const checkPassStrength = (event) => {
        const pass = event.target.value;
        if (/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/.test(pass)) {
            setPerrormsg("");
            setPsuccessmsg("Strong Password");
            setPassword (pass);
        }
        else {
            setPsuccessmsg("");
            setPerrormsg("Please provide a password of atleast 8 characters, one capital letter and one digits");
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
        }
    }
    return (

        <div className='w-50 mx-auto'>
            <h1 className='text-center my-5'>Login</h1>
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
                    <Form.Control type="password" name="cpass" placeholder="Confirm Password" />
                    {cerrormsg ? <p className='text-danger'>{cerrormsg}</p> : <p className='text-success'>{csuccessmsg}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>

            </Form>
        </div>
    );
};

export default Signup;
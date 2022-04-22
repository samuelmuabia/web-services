import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth,{sendEmailVerification: true});
    if (user ) {
        navigate(from, { replace: true });
    }
    if (error) {
       return (<p className='text-danger'>Error: {error?.message}</p>);
    }
    return (
        
        <div className='w-lg-50 w-100 text-center' >
             <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-black w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-black w-50'></div>
            </div>
            <button className='btn btn-outline-dark' onClick={() => signInWithGoogle()}><img style={{width :'24px'}} src="/images/google.png" alt="" /> Continue with Google</button>
        </div>
    );
};

export default SocialLogin;
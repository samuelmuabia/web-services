import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (user ) {
        navigate(from, { replace: true });
    }
    return (
        <div className='w-lg-50 w-100 text-center' >
            <button className='btn btn-outline-dark' onClick={() => signInWithGoogle()}><img style={{width :'24px'}} src="/images/google.png" alt="" /> Continue with Google</button>
        </div>
    );
};

export default SocialLogin;
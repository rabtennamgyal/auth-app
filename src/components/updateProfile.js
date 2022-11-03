import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { auth } from '../firebase';




function UpdateProfile() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmRef = useRef();
    const { currentUser, updateEmail1, updatePassword1 } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== confirmRef.current.value) {
            const form = document.getElementById('form');
            form.classList.remove('signUpContent');
            form.classList.add('signUpContentError');
            return setError('Passwords do not match.');
        };

        const promises = []; 

        setLoading(true);
        setError('');

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail1(auth.currentUser, emailRef.current.value));
        };

        if (passwordRef.current.value) {
            promises.push(updatePassword1(auth.currentUser, passwordRef.current.value))
        };

        Promise.all(promises).then(() => {
            navigate('/')
        }).catch(() => {
            const form = document.getElementById('form');
            form.classList.remove('signUpContent');
            form.classList.add('signUpContentError');
            setError('Failed to update Account.')
        }).finally(() => {
            setLoading(false);
        });
    };

    return (
        <div className='signupPage'> 
            <div className='signUpContent' id='form'>
                <h1>
                    Update Profile
                </h1>

                {error && 

                <div className="error">
                    <h1>
                        {error}
                    </h1>
                </div>
                
                }
    
                <form className='form' onSubmit={handleSubmit} id='formContent'>
                    <label htmlFor='email'>
                        Email:
                    </label>

                    <input id='email' ref={emailRef} required defaultValue={currentUser.email}/>

                    <label htmlFor='password'>
                        Password:
                    </label>

                    <input id='password' type='password' ref={passwordRef} placeholder='  Leave blank to keep the same.' />

                    <label htmlFor='confirm'>
                        Password Confirmation:
                    </label>

                    <input id='confirm' type='password'  ref={confirmRef} placeholder='  Leave blank to keep the same.'/>

                    <button id='signUpButton' disabled={loading}>
                        Sign Up
                    </button>

                    <div className='linkLogIn'>
                        <Link to='/'>Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default UpdateProfile;
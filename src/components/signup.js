import React, { useRef, useState } from 'react';
import { useAuth } from '../context/authContext';
import { auth } from '../firebase';



function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmRef = useRef();
    const { signup, currentUser } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== confirmRef.current.value) {
            const form = document.getElementById('form');
            form.classList.remove('signUpContent');
            form.classList.add('signUpContentError');
            return setError('Passwords do not match.');
        };

        try {
            setError('');
            setLoading(true);
            await signup(auth, emailRef.current.value, passwordRef.current.value)
        } catch {
            const form = document.getElementById('form');
            form.classList.remove('signUpContent');
            form.classList.add('signUpContentError');
            setError('Failed to create an account.');
        }

        setLoading(false);
    };

    return (
        <div className='signupPage'> 
            <div className='signUpContent' id='form'>
                <h1>
                    Sign Up
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

                    <input id='email' ref={emailRef} required/>

                    <label htmlFor='password'>
                        Password:
                    </label>

                    <input id='password' type='password' ref={passwordRef} />

                    <label htmlFor='confirm'>
                        Password Confirmation:
                    </label>

                    <input id='confirm' type='password'  ref={confirmRef} />
                    <button id='signupButton' disabled={loading}>
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    )
};

export default SignUp;
import React, { useRef, useState } from 'react';
import { useAuth } from '../context/authContext';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';



function LogIn() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            const form = document.getElementById('form');
            form.classList.remove('signUpContentError');
            form.classList.add('signUpContent');
            await login(auth, emailRef.current.value, passwordRef.current.value);
            navigate('/');
        } catch {
            // const form = document.getElementById('form');
            // form.classList.remove('signUpContent');
            // form.classList.add('signUpContentError');
            setError('Failed to log in.');
        }

        setLoading(false);
    };

    return (
        <div className='signupPage'> 
            <div className='signUpContent' id='form'>
                <h1>
                    Log In
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


                    <button id='signUpButton' disabled={loading}>
                        Log In
                    </button>

                    <Link to='/signup' id='link'>
                        <button id='linkSignUp'>
                            Sign Up
                        </button>
                    </Link>
                </form>

                <div className='passwordReset'>
                    <Link to='/forgot-password'>
                        Forgot Password ?
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default LogIn;
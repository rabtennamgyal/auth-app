import React, { useRef, useState } from 'react';
import { useAuth } from '../context/authContext';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';



function LogIn() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

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

                    <button id='linkSignUp'>
                        <Link to='/signup'>Sign Up</Link>
                    </button>
                </form>
            </div>
        </div>
    )
};

export default LogIn;
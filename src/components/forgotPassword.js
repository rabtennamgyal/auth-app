import React, { useRef, useState } from "react";
import { useAuth } from '../context/authContext';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';


export default function ForgotPassword() {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);


    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setMessage('');
            setError('');
            setLoading(true);
            const form = document.getElementById('form');
            form.classList.remove('resetContentError');
            form.classList.add('resetContent');
            await resetPassword(auth, emailRef.current.value);
            setMessage('Check your inbox for further instruction.')
            form.classList.add('resetContentMessage')
        } catch {
            const form = document.getElementById('form');
            form.classList.remove('resetContent');
            form.classList.add('resetContentError');
            setError('Failed to reset Password.');
        }

        setLoading(false);
    };


    return (
        <div className='resetPage'>
            <div className='resetContent' id='form'>
                <h1>
                    Reset Password
                </h1>

                {error &&

                <div className="error">
                    <h1>
                        {error}
                    </h1>
                </div>

                }

                {message &&
                
                <div className="message">
                    <h1>
                        {message}
                    </h1>
                </div>
                
                }

                <form className='form' onSubmit={handleSubmit} id='formContent'>
                    <label htmlFor='email'>
                        Email:
                    </label>

                    <input id='email' ref={emailRef} required/>

                    <button id='resetButton' disabled={loading}>
                        Reset Password
                    </button>

                    <Link to='/login' id='link'>
                        <button id='linkLogIn'>
                            Log In
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    )
};
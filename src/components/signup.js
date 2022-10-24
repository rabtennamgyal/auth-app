function SignUp() {
    return (
        <div className='signupPage'> 
            <div className='signUpContent'>
                <h1>
                    Sign Up
                </h1>
    
                <div className='form'>
                    <form>
                        <label for='email'>
                            Email:
                        </label>
    
                        <input id='email' />
    
                        <label for='password'>
                            Password:
                        </label>
    
                        <input id='password' />
    
                        <label for='confirm'>
                            Password Confirmation:
                        </label>
    
                        <input id='confirm' />
                    </form>
                </div>
    
                <div className='btn'>
                    <button id='signupButton'>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
};

export default SignUp;
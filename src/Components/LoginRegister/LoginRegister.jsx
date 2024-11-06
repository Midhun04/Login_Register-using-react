import React, { useState } from "react";
import './LoginRegister.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const LoginRegister = () => {
    const [isRegister, setIsRegister] = useState(false);

    const toggleForm = () => {
        setIsRegister(!isRegister);
    };

    return (
        <div className={`wrapper ${isRegister ? 'register-mode' : ''}`}>
            <div className='form-box'>
                <form action="">
                    <h1>{isRegister ? 'Registration' : 'Login'}</h1>
                    
                    <div className='input-box'>
                        <input type="text" placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    
                    {isRegister && (
                        <div className='input-box'>
                            <input type="email" placeholder='Email' required />
                            <FaEnvelope className='icon' />
                        </div>
                    )}
                    
                    <div className='input-box'>
                        <input type="password" placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>
                    
                    {isRegister && (
                        <div className='remember-forgot'>
                            <label><input type="checkbox" />I agree to the terms & conditions.</label>
                        </div>
                    )}
                    
                    <div className='remember-forgot'>
                        {!isRegister && (
                            <>
                                <label><input type="checkbox" />Remember me</label>
                                <a href="#">Forgot Password?</a>
                            </>
                        )}
                    </div>
                    
                    <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
                    
                    <div className='register-link'>
                        <p>
                            {isRegister ? "Already have an account?" : "Don't have an account?"} 
                            <a href="#" onClick={toggleForm}>
                                {isRegister ? 'Login' : 'Register'}
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginRegister;

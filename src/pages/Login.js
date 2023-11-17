import React, { useState } from 'react';
import './pagecss/Login.css';

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleSignup = () => {
    setIsSignup(!isSignup);
  };

  const handleValidation = () => {
    // Perform validation logic here
    // For simplicity, let's assume all fields are required
    const requiredFields = isSignup
      ? ['fullname', 'email', 'signup-username', 'signup-password', 'confirm-password']
      : ['username', 'password'];

    for (const field of requiredFields) {
      const input = document.getElementById(field);
      if (!input.value) {
        input.classList.add('is-invalid');
      } else {
        input.classList.remove('is-invalid');
      }
    }
  };

  const handleCapsLockWarning = (e) => {
    const warning = document.getElementById('caps-lock-warning');
    const isCapsLockOn = e.getModifierState && e.getModifierState('CapsLock');
    warning.style.visibility = isCapsLockOn ? 'visible' : 'hidden';
  };

  return (
    <div className="login-container">
      <div className="teal-box">
        <h1>{isSignup ? 'SIGNUP' : 'LOGIN'}</h1>
        {!isSignup && (
          <>
            <div className="input-section">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                className="form-control is-invalid"
                onKeyUp={handleCapsLockWarning}
              />
              <div className="invalid-feedback">Username is required.</div>
            </div>
            <div className="input-section">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                className="form-control is-invalid"
                onKeyUp={handleCapsLockWarning}
              />
              <div className="invalid-feedback">Password is required.</div>
            </div>
            <div className="caps-lock-warning" id="caps-lock-warning">
              Caps Lock is on!
            </div>
            <button className="signup-button" onClick={handleValidation}>
              Login
            </button>
            <button className="signup-button" onClick={toggleSignup}>
              New User?
            </button>
          </>
        )}
        {isSignup && (
          <>
            <div className="input-section">
              <label htmlFor="fullname">Full Name:</label>
              <input type="text" id="fullname" className="form-control is-invalid" />
              <div className="invalid-feedback">Full Name is required.</div>
            </div>
            <div className="input-section">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" className="form-control is-invalid" />
              <div className="invalid-feedback">Email is required.</div>
            </div>
            <div className="input-section">
              <label htmlFor="signup-username">Username:</label>
              <input type="text" id="signup-username" className="form-control is-invalid" />
              <div className="invalid-feedback">Username is required.</div>
            </div>
            <div className="input-section">
              <label htmlFor="signup-password">Password:</label>
              <input type="password" id="signup-password" className="form-control is-invalid" />
              <div className="invalid-feedback">Password is required.</div>
            </div>
            <div className="input-section">
              <label htmlFor="confirm-password">Confirm Password:</label>
              <input type="password" id="confirm-password" className="form-control is-invalid" />
              <div className="invalid-feedback">Confirm Password is required.</div>
            </div>
            <button className="signup-button" onClick={handleValidation}>
              Submit
            </button>
            <button className="signup-button" onClick={toggleSignup}>
              Back to Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;

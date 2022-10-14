import React, { useState } from 'react'
import SignUpForm from '../components/SignUpForm'
import LoginForm from '../components/LoginForm'

const Login = ({onLogin}) => {
    const [showLogin, setShowLogin] = useState(true);

  return (
    <>
        
        {showLogin ? (

        <div style={{textAlign: "center"}}>
          <div style={{textAlign: "center"}}>
            <h1 class="display-1">Login</h1>
          </div>
          <br />
          <LoginForm onLogin={onLogin} />
          <br />
          <br />
          <br />
          <p>
            Don't have an account? &nbsp;
            <button type="button" class="btn btn-primary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </div>
      ) : (
        <>
        <div style={{textAlign: "center"}}>
          <div style={{textAlign: "center"}}>
              <h1 class="display-1">Sign Up</h1>
          </div>
          <SignUpForm onLogin={onLogin} />
          <br />
          <p>
            Already have an account? &nbsp;
            <button type="button" class="btn btn-primary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </div>
        </>
      )}
    </>
  )
}

export default Login
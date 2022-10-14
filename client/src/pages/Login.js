import React, { useState } from 'react'
import SignUpForm from '../components/SignUpForm'
import LoginForm from '../components/LoginForm'

const Login = ({onLogin}) => {
    const [showLogin, setShowLogin] = useState(true);

  return (
    <>
    <div>
      <div>  
        </div>    
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
          <p style={{marginRight:'600px', marginTop:'-50px'}}>
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
          <p >
            Already have an account? &nbsp;
            <button type="button" class="btn btn-primary" onClick={() => setShowLogin(true)}>
              Log In
            </button>mariam
          </p>
        </div>
        </>
      )}
      <div
  className="bg-image"
  style={{backgroundImage: "url('https://media.istockphoto.com/photos/airplane-wing-in-the-sky-on-a-sunset-picture-id1310347034?b=1&k=20&m=1310347034&s=170667a&w=0&h=nE1G2vJAfkniV5_4OxAq8E3hXEe3XLfq6W9ezZLCIsY=')", 
  height: '50vh'}}></div>
      </div> 
    </>
  )
}

export default Login
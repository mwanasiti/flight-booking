import React, { useState } from 'react'

const LoginForm = ({onLogin}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
    <div style={{width: "30%", backgroundColor:'#000000', color:'#ffffff', marginLeft:'420px'}} className='card'>
      <div className='card-body'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label style={{color:'#ffffff', marginRight:'5px', fontFamily:'inherit', fontSize:'20px'}} for="username" className="form-label">Username : </label>
          <input 
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
          <div id="username" className="form-text">Input a unique username.</div>
        </div>
        <div className="mb-3">
          <label style={{color:'#ffffff', marginRight:'5px', fontFamily:'inherit', fontSize:'20px'}} for="password" className="form-label">Password : </label>
          <input type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div style={{textAlign: "center"}}>
          <button type="submit" className="btn btn-dark">
            {isLoading ? "Loading..." : "Login"}
          </button>
        </div>
        
        {errors.map((err) => {
          return <div key={err}>
                    <li>{err}</li>
                </div>
        })}
      </form>
      </div>
    </div>
    </>
  )
}

export default LoginForm
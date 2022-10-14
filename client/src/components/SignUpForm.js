import React, { useState } from 'react'

const SignUpForm = ({onLogin}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
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
      <div style={{width: "50%", display: "inline-flex", justifyContent: "center"}}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="username" className="form-label">Username</label>
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
          <label for="password" className="form-label">Password</label>
          <input type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label for="passwordC" className="form-label">Password Confirmation</label>
          <input type="password"
          id="password_confirmation"
          autoComplete="current-password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}/>
        </div>
        <div style={{textAlign: "center"}}>
          <button type="submit" className="btn btn-primary">
          {isLoading ? "Loading..." : "Sign Up"}
          </button>
        </div>
        
        {errors?.map((err) => {
          return <div key={err}>
                    <li>{err}</li>
                </div>
        })}
      </form>
    </div>
    </>
  )
}

export default SignUpForm
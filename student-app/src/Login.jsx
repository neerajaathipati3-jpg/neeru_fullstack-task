import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    if (username === "admin" && password === "1234") {
      setMessage("Login Successful!");
    } else {
      setMessage("Invalid Username or Password");
    }
  };

  return (
    <div>
      <h2>Login Page</h2>

      <form onSubmit={handleLogin}>

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <br />
        <br />

        <button type="submit">
          Login
        </button>

      </form>

      <p>{message}</p>
    </div>
  );
}

export default Login;
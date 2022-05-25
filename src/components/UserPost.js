import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { loginUser, signUpUser } from "../api";

const UserPost = ({ formType }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isLogin = formType === "login";

  const title = isLogin ? "Login" : "Sign Up";
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const data = isLogin ? await loginUser(username, password) : await signUpUser(username, password)
    const token = data?.token;

    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("username", username)

      setUsername("");
      setPassword("");
      navigate("/");
    }
  };
  return (
    <div>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit">{title}</button>
      </form>
    </div>
  );
};
  
export default UserPost
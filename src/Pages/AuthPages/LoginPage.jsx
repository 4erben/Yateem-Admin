import { useDispatch, useSelector } from "react-redux";
import {  useState } from "react";

import { Link, Navigate, useNavigate } from "react-router-dom";
import { login } from "../../Redux/Slices/authSlice";
export default function LoginPage(){
  const user = useSelector(state=>state.auth.user);
  const navigate = useNavigate();
  const [email ,setEmail] = useState("");
  const [password ,setPassword] = useState("");
  const isLoading = useSelector(state=>state.auth.isLoading);
  const error = useSelector(state=>state.auth.err);
  const success = useSelector(state=>state.auth.success);
  const dispatch = useDispatch();
  function handleOnSubmit(e){
    e.preventDefault();
    dispatch(login({
      email:email,
      password:password
    }));
   /*  if(user)
    navigate("/") */
  }


return (
<>
<div className="background login-page d-flex align-items-center " >
  <div className="login-container mx-auto ">
    <div className="login-header">
      <h2>Welcome to <span>Admin Panel</span></h2>
      <p>Login to your account</p>
    </div>
    <div className="login-form">
      <form method="post" onSubmit={handleOnSubmit}>
        <div className="input-group">
          <i className="fas fa-user"></i>
          <input 
            type="text"
            onChange={(e)=> setEmail(e.target.value)}
            value={email}
            name="email" 
            placeholder="Email" 
            required 
            className="form-control mx-1"/>
        </div>
        <div className="input-group">
          <i className="fas fa-lock"></i>
          <input 
            type="password"
            onChange={(e)=> setPassword(e.target.value)}
            value={password}
            name="password" 
            placeholder="Password" 
            required 
            className="form-control mx-1"/>
        </div>
        <button type="submit" className="login-button" /* disabled={isLoading} */>Login</button>
        {error && <div className="alert alert-danger" role="alert"> {error}</div>} 
        {isLoading && <p>Loading</p> } 
        {success ? <Navigate to="/" /> : null}
      </form>
    </div>
    <div className="signup-link">
      Don't have an account? <Link to="/register">Sign Up</Link>
    </div>
  </div>
  </div>
</>
);
}
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { useState } from "react";
import { register } from "../Redux/Slices/authSlice";
export default function RegisterPage(){
  const error = useSelector(state=> state.auth.err);
  const isLoading = useSelector(state=> state.auth.loading);
  const [email ,setEmail] = useState("");
  const [password ,setPassword] = useState("");
  const [displayName ,setDisplayName] = useState("");
  const dispatch = useDispatch();
  function handleOnSubmit(e){
    e.preventDefault();
    dispatch(register({
      name:displayName,
      email:email,
      password:password
    }))
  }
    return (
        <div className="background login-page d-flex align-items-center">
       <div className="login-container mx-auto ">
    <div className="login-header">
      <h2>Welcome to <span>Sizzle Shop</span></h2>
      <p>SignUp </p>
    </div>
    <div className="login-form">
      <form method="post" onSubmit={handleOnSubmit}>
      <div className="input-group">
          <i className="fas fa-user"></i>
          <input 
            type="text" 
            onChange={(e)=> setDisplayName(e.target.value)}
            value={displayName}
            name="displayName" 
            placeholder="Name" 
            required 
            className="form-control mx-2"/>
        </div>
        <div className="input-group">
          <i className="fas fa-user"></i>
          <input 
            type="text" 
            onChange={(e)=> setEmail(e.target.value)}
            value={email}
            name="email" 
            placeholder="Email" 
            required 
            className="form-control mx-2"/>
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
            className="form-control mx-2"/>
        </div>
        <div className="options">
          {/* <a href="#" className="forgot-password">Forgot Password?</a> */}
        </div>
        <button type="submit" className="login-button">Login</button>
        {error && <div className="alert alert-danger"> {error}</div>}
        {isLoading && <p>Loading</p>}
      </form>
    </div>
    <div className="signup-link">
      Already Registered? <Link to="/login">Sign In</Link>
    </div>
  </div>
        </div>
    )
}
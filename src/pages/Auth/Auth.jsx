import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";

const Auth = (props) => {
  const isLogin=props.isLogin;
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Anime Media</h1>
          <h6>Welcome to Anime World 😄</h6>
        </div>
      </div>
      {/* conditional Rendering  */}
      {isLogin?<LogIn></LogIn>:<SignUp></SignUp>}
    </div>
  );
};
function LogIn() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Log In</h3>

        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px", cursor: "pointer" }}>
            <Link style={{
              textDecoration: "none",
              color: "black"
            }} to="/Signup"> Don't have an account Sign up</Link>
            
          </span>

          <Link to="/Home"><button className="button infoButton">Login</button></Link>

        </div>
      </form >
    </div >
  );
}
function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign up</h3>

        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Usernames"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
          <input
            type="text"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
          />
        </div>

        <div>
          <span style={{ fontSize: '12px' ,cursor:"pointer" }}>
          <Link style={{
              textDecoration: "none",
              color: "black"
            }}  to="/"  >
          Already have an account. Login!
          </Link></span>
        </div>
        <Link style={{
              textDecoration: "none",
              color: "black"
            }}  
         to='/Home'>
        <button className="button infoButton" type="submit">Signup</button>
        </Link>
       
      </form>
    </div>
  );
}

export { Auth };


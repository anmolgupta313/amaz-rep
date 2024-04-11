import React, { useState } from "react";
import "../Css/login.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/userSlice";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const dispatch = useDispatch();
  //   const history = useHistory();

  const [signupInput, setsignupInput] = useState({
    email: "",
    password: "",
  });



  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, signupInput.email, signupInput.password)
      .then((userCredentials) => {
        console.log(userCredentials);

        // if (auth) {
        //     history.push("/");
        //   }
      })
      .catch(console.error((error) => console.log(error)));
  };

  function handleChange(e) {
    return setsignupInput((value) => {
      return { ...value, [e.target.name]: e.target.value };
    });
  }

  const user = useSelector((state) => {
    return state.user;
  });

  console.log(user, "signUp User");
  return (
    <div className="login-container">
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG3.png"
        alt=""
        className="login-logo"
      />

      <div className="login-box">
        <h1>Sign-up</h1>

        <form action="" onSubmit={register}>
          <h5>Email</h5>
          <input
            type="text"
            name="email"
            value={signupInput.email}
            onChange={handleChange}
          />

          <h5>Password</h5>
          <input
            type="password"
            name="password"
            value={signupInput.password}
            onChange={handleChange}
          />

          <button className="login-sign-in-btn">Sign In</button>
        </form>

        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
      </div>
    </div>
  );
}

export default Signup;

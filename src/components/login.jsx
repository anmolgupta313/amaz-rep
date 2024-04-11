import React, { useState } from "react";
import "../Css/login.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/userSlice";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
  const dispatch = useDispatch();
  //   const history = useHistory();

  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginInput.email, loginInput.password)
      .then((userCredentials) => {
        console.log(userCredentials);
        dispatch(addUser({ loginInput }));
        // if (auth) {
        //   history.push("/");
        // }
      })
      .catch(console.error((error) => console.log(error)));
  };

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, loginInput.email, loginInput.password)
      .then((userCredentials) => {
        console.log(userCredentials);

        // if (auth) {
        //     history.push("/");
        //   }
      })
      .catch(console.error((error) => console.log(error)));
  };

  function handleChange(e) {
    return setLoginInput((value) => {
      return { ...value, [e.target.name]: e.target.value };
    });
  }

  const user = useSelector((state) => {
    return state.user;
  });

  console.log(user, "signIn User");
  return (
    <div className="login-container">
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG3.png"
        alt=""
        className="login-logo"
      />

      <div className="login-box">
        <h1>Sign-in</h1>

        <form action="" onSubmit={signIn}>
          <h5>Email</h5>
          <input
            type="text"
            name="email"
            value={loginInput.email}
            onChange={handleChange}
          />

          <h5>Password</h5>
          <input
            type="password"
            name="password"
            value={loginInput.password}
            onChange={handleChange}
          />

          <button className="login-sign-in-btn">Sign In</button>
        </form>

        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>

        <button className="login-registern-btn" onClick={register}>
          Create your amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;

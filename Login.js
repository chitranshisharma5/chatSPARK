import React from "react";
import "./Login.css";
import { Button } from "@mui/material";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
function Login() {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.pixabay.com/photo/2020/06/06/19/23/lgbt-5267848_1280.png"
          alt=""
        />
        <div className="login__text">
          <h1>Sign in to chatSPARK</h1>
        </div>
        <Button onClick={signIn}>Sign In with Google</Button>;
      </div>
    </div>
  );
}

export default Login;

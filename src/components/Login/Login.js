import { Button } from "@material-ui/core";
import React from "react";
import "../../css/login.css";
import { auth, provider } from "../../firebase";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();

  function signIn(e) {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://thegioiuudai.com.vn/sites/default/files/articles/facebook-button.png"
          alt=""
        />
      </div>
      <Button variant="contained" color="primary" onClick={signIn}>
        Login in with Facebook
      </Button>
    </div>
  );
}

export default Login;

import "./LoginScreen.css";
import React, { useState } from "react";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
          className="loginScreen__logo"
        />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign in
        </button>
        <div className="loginScreen__gradient"></div>
      </div>
      <div className="loginScreen__body">
        {signIn ? (
          // <SignInScreen />
          console.log('sign in goes here!')
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="loginScreen__input">
              <form action="">
                <input type="email" name="" placeholder="Email Address" id="" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;

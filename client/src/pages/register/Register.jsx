import "./register.scss";
import React from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinsh = () => {
    setEmail(passwordRef.current.value);
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
            alt=""
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2> Watch anywhere.cancel anytime.</h2>
        <p>
          {" "}
          Ready to watch ? Enter your email to create or reset your membership
        </p>
        {!email ? (
          <div className="input">
            <input ref={emailRef} type="email" placeholder="Email address" />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <div className="input">
            <input ref={passwordRef} type="password" placeholder="Password" />
            <button className="registerButton" onClick={handleFinsh}>
              Start
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

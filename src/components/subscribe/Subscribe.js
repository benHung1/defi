import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="content">
        <h2>Join Our DeFi Community</h2>
        <form
          action="https://getform.io/f/d11c16ad-9d5a-4f8b-91c5-81878509d463"
          method="POST"
        >
          <div className="form-container display-col">
            <input type="email" name="email" placeholder="Enter your email" />
            <button className="btn">Sign Up</button>
          </div>
          <div className="form-container">
            <p>
              If you chose Sign Up, mains you agree to receive email
              communications from DeFi
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;

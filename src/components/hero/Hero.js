import React from "react";
import MainVideo from "../../assets/video.mp4";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={MainVideo} type="video/mp4" />
      </video>
      <div className="hero-text">
        <h1>Decentralized</h1>
        <h1>
          <span className="blue">Trading</span>Protocol
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          eos consectetur ut dolorem tenetur magnam eius ducimus nostrum?
        </p>
        <div className="btn-group">
          <button className="btn">Use DeFi</button>
          {/* <button className="btn btn-outline">Documentation</button> */}
          <button className="btn btn-outline">FAQ</button>
        </div>
      </div>
      <div className="bottom-text">
        <h2>Total Volume Secured: $42,104,783,662,478</h2>
      </div>
    </div>
  );
};

export default Hero;

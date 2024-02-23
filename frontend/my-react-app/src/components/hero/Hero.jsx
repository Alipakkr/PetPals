import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/Pet_image_w.png";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Let us unite for them</h2>
        <div>
          <div className="hero-hand-icon">
            <p>   </p>
            <img src={hand_icon} alt="hand-icon" />
          </div>
          <p>Feed them,</p>
          <p> don’t hit them.</p>
        </div>
        <div className="hero-latest-btn">
          <div>Local Pets</div>
          <img src={arrow_icon} alt="arrow" />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

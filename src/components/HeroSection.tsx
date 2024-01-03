import React from "react";
import "../App.css";
import Type from "./Type";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-name">
          Hi There!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋
          </span>
        </h1>
        <h1 className="hero-name">I'm Giridhara Ganesh Reddy</h1>
        <p className="hero-summary">
          Tech Alchemist Creating User Delight Through Code!
        </p>
        <p className="hero-summary">
          <Type />
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

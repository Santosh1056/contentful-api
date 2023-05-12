import React from "react";
import heroImg from "./assets/hero.svg";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>All My Projects</h1>
          <p>
            Echo park seitan praxis, mlkshk hammock man bun prism adaptogen
            authentic blackbird spyplane photo booth typewriter jean shorts
            lo-fi. Gastropub kinfolk marxism green juice, pabst sriracha mlkshk
            small batch keffiyeh. Austin church-key mlkshk, Brooklyn woke street
            art activated charcoal +1.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="hero-img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

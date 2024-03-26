import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="hero-container">
      <h2 className="hero-heading">Tautswako exquisite cocktails</h2>
      <p className="hero-body">
        Explore the art of mixology at our Cocktail Bar. Each sip is a crafted
        journey, from classic to innovative cocktails. Join us for an evening of
        refined sophistication and celebration. Cheers to extraordinary moments
        and crafted drinks!
      </p>
      <button className="btn btn-primary">
        <Link to="/Quote" className="text-light">
          Get a Quote
        </Link>
      </button>
    </div>
  );
};

import React from "react";
import Logo from "../Assets/Logo-vertical.jpg";
import "./AboutUs.css";

export const AboutUs = () => {
  return (
    <div>
      <div
        className="px-4 py-5 my-5 text-center moreMargin text-light"
        id="About-us"
      >
        <img src={Logo} alt="" className="profile-photo" id="Logo" />
        <h1 className="display-5 fw-bold text-light">About Us</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-3">Taustwako Exquisite cocktails</p>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
            laudantium! Quisquam maiores consequatur officia minus, mollitia
            adipisci? Illum qui deleniti, sunt non sed nihil vel, quia
            exercitationem, eveniet minima mollitia!
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

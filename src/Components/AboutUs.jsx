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
            "We are a mobile bar known for crafting meticulously engineered,
            exquisite drinks with a touch of passion, creativity, and unique
            style. Our team brings the party to you, creating a vibrant
            atmosphere that perfectly complements your event. Whether it's an
            intimate gathering or a grand celebration, we deliver a memorable
            cocktail experience that is as dynamic and unique as you are."
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
        </div>
      </div>
    </div>
  );
};

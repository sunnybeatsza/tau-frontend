import React from "react";
import Slider from "react-slick";
import Chris1 from "../Assets/Chris1.jpg";
import Chris2 from "../Assets/Chris2.jpg";
import Chris3 from "../Assets/Chris3.jpg";
import Client1 from "../Assets/Client1.jpg";
import Drinks3 from "../Assets/Drinks3.jpg";
import Drinks4 from "../Assets/Drinks4.jpg";

import "./Slider.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <>
      <div id="Events">
        <div className="px-4 py-5 my-5 text-center" id="events-background">
          <h1 className="display-5 fw-bold text-light">Events</h1>
          <div className="col-lg-6 mx-auto">
            <p className="text-light mb-4">
              Welcome to our thrilling world of events! Immerse yourself in
              unforgettable moments at our carefully planned gatherings. From
              elegant scenes to exciting moments, refreshing experiences, and
              charming settings, each event is a unique and special occasion.
              Explore our gallery, where each image tells a story of joy and
              celebration. Join us for the next memorable event – click the
              buttons below. Let's create lasting memories together!
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 gap-3"
              >
                Primary button
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Secondary
              </button>
            </div>
          </div>
        </div>
      </div>
      <Slider {...settings} className="custom-slider">
        <div>
          <img src={Chris1} alt="Image 1" />
          <p className="text-light">Serving smiles</p>
        </div>
        <div>
          <img src={Chris2} alt="Image 2" />
          <p className="text-light">Amazing service</p>
        </div>
        <div>
          <img src={Drinks3} alt="Image 3" />
          <p className="text-light">Premium Drinks</p>
        </div>
        <div>
          <img src={Drinks4} alt="Image 4" />
          <p className="text-light">Lovely cocktails</p>
        </div>
        <div>
          <img src={Client1} alt="Image 5" />
          <p className="text-light">Happy clients</p>
        </div>
        <div>
          <img src={Chris3} alt="Image 6" />
          <p className="text-light">Serving flavour</p>
        </div>
      </Slider>
    </>
  );
}

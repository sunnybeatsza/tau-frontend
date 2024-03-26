import React from "react";
import { useLocation } from "react-router-dom/dist";
import "./Checkout.css";
import { Navbar } from "../Components/Navbar";
import { CheckoutCard } from "../Components/CheckoutCard";

export const Checkout = () => {
  const location = useLocation();
  const formValues = location.state?.formValues || {};

  return (
    <div>
      <Navbar />
      <div className="checkout-outer-flex">
        <div className="checkout-outer-container">
          <div className="checkout-top-container">
            <h3>YOUR ENQUIRY</h3>
            <p>Enquires are valid for 30 days</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="checkout-bottom-container">
            <CheckoutCard />
            <div className="quote-total">
              <button className="btn btn-primary my-2">Send Enquiry</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

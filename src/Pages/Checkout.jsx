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
            <h3>YOUR QUOTE</h3>
            <p>Quotes are valid for 30 days</p>
            <p>
              The quote information will be sent to one of our managers and
              response will be given in 2-3 working days
            </p>
          </div>
          <div className="checkout-bottom-container">
            <CheckoutCard />
          </div>
        </div>
      </div>
    </div>
  );
};

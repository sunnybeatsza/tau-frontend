import React from "react";
import "./CheckoutCard.css";
import { useLocation } from "react-router-dom";

export const CheckoutCard = () => {
  const location = useLocation();
  const formValues = location.state?.formValues || {};

  return (
    <div className="checkoutcard-container">
      <p>
        <i class="fa-solid fa-person mx-3 my-1"></i>Guests
      </p>

      <p>
        <i class="fa-solid fa-martini-glass mx-3 my-1"></i>
        {formValues.DrinkPref}
      </p>

      <p>
        <i class="fa-solid fa-champagne-glasses mx-3 my-1"></i>
        {formValues.DrinkOptions}
      </p>

      <p>
        {" "}
        <i class="fa-solid fa-location-arrow mx-3 my-1"></i>
        {formValues.Venue}
      </p>

      <p>
        {" "}
        <i class="fa-solid fa-location-dot mx-3 my-1"></i>
        {formValues.Address}
      </p>

      <p>
        <i class="fa-solid fa-clock mx-3 my-1"></i>
        {formValues.Duration}
      </p>

      <p>
        <i class="fa-solid fa-calendar-days mx-3 my-1"></i>
        {formValues.DateTime}
      </p>
    </div>
  );
};

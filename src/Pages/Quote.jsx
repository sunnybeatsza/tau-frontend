import React from "react";
import "./Quote.css";
import { Navbar } from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";

export const Quote = () => {
  const [formValues, setFormValues] = useState([]);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      Guests: "",
      DrinkPref: "",
      Venue: "",
      Address: "",
      DrinkOptions: "",
      Duration: "",
      DateTime: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setFormValues(values);
      navigate("/Checkout", { state: { formValues: values } });
    },
  });

  const GoBack = () => {
    navigate("/");
  };
  return (
    <div>
      <Navbar />
      <div className="quote-outer-container">
        <div className="quote-container">
          <h1 className="text-white mb-3">Get a Quote!</h1>
          <button className="btn btn-primary text-light mb-3" onClick={GoBack}>
            Go Back
          </button>
          <form onSubmit={formik.handleSubmit}>
            <h3>Guests</h3>
            <div className="quote-container-top">
              <label htmlFor="Guests">
                How many people are going to be there?
              </label>
              <br />
              <select
                name="Guests"
                id="Guests"
                className="my-3"
                onChange={formik.handleChange}
                value={formik.values.Guests}
              >
                <option value="Select an option">Select an option</option>
                <option value="25-50">25 - 50</option>
                <option value="50-100">50 - 100</option>
                <option value="100-150">100 - 150</option>
                <option value="200+">200+</option>
              </select>
              <br />
              <hr />
            </div>
            <h3>Drink Preference</h3>

            <label htmlFor="DrinkPref">
              Do you prefer alcoholic or non-alcoholic
            </label>
            <br />
            <select
              name="DrinkPref"
              id="DrinkPref"
              className="my-3"
              onChange={formik.handleChange}
              value={formik.values.DrinkPref}
            >
              <option value="Select an option">Select an option</option>
              <option value="Alcoholic">Alcoholic</option>
              <option value="Non-Alcoholic">Non-Alcoholic</option>
            </select>
            <hr />
            <div>
              <h3>Venue</h3>
              <label htmlFor="Venue">
                Will the venue be indoor or outdoor?
              </label>
              <br />
              <select
                name="Venue"
                id="Venue"
                className="my-3"
                onChange={formik.handleChange}
                value={formik.values.Venue}
              >
                <option value="Select an option">Select an option</option>
                <option value="Indoor">Indoor</option>
                <option value="Outdoor">Outdoor</option>
              </select>
              <br />
              <label htmlFor="Address" className="me-2 my-3">
                Address:
              </label>
              <input
                type="textarea"
                name="Address"
                id="Address"
                className="my-3"
                onChange={formik.handleChange}
                value={formik.values.Address}
              />
            </div>
            <hr />
            <div>
              <h3>Drinks Options</h3>
              <label htmlFor="DrinkOptions">
                What type of drink options would you like?
              </label>
              <br />
              <select
                name="DrinkOptions"
                id="DrinkOptions"
                className="my-3"
                onChange={formik.handleChange}
                value={formik.values.DrinkOptions}
              >
                <option value="Select an option">Select an option</option>
                <option value="Vodka">Vodka</option>
                <option value="Rum">Rum</option>
              </select>
            </div>
            <hr />
            <div>
              <h3>Duration</h3>
              <label htmlFor="Duration">How long will you be hiring us?</label>
              <br />
              <select
                name="Duration"
                id="Duration"
                className="my-3"
                onChange={formik.handleChange}
                value={formik.values.Duration}
              >
                <option value="Select an option">Select an option</option>
                <option value="2 hours">2 hours</option>
                <option value="4 hours">4 hours</option>
                <option value="6 hours">6 hours</option>
              </select>
            </div>
            <hr />
            <div>
              <h3>Date/Time</h3>
              <label for="birthdaytime" className="me-2">
                When is the event?:
              </label>
              <input
                type="date"
                name="DateTime"
                id="DateTime"
                className="my-3"
                onChange={formik.handleChange}
                value={formik.values.DateTime}
              />
            </div>
            <hr />
            <button className="btn btn-primary" type="submit">
              Checkout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("Contact_service", "Contact_form", form.current, {
        publicKey: "cLGsKTwuRgLuquZfF",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div id="Contact">
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-light mb-3">
              Contact Us
            </h1>
            <p className="text-light fs-4">
              If you have any questions or concerns, please feel free to contact
              us. We are here to help. We will get back to you as soon as
              possible. We love to connect with our customers.
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form
              className="p-4 p-md-5 border rounded-3 bg-black"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  name="Email"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Name"
                  name="FirstName"
                />
                <label htmlFor="floatingPassword">Name</label>
              </div>

              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Send enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import "./Services.css";

export const Services = () => {
  return (
    <>
      <div className="services-container text-light">
        <div className="services-item image1"></div>
        <div className="services-item" id="services-body-1">
          <h1>Premium Drinks</h1>
          <p>
            "We offer an extensive selection of drinks to suit every taste. Our
            menu features premium champagnes, fine cognacs, and quality wines,
            along with a variety of beers, ciders, and unique blends for
            creating exceptional cocktails. Whether you're in the mood for a
            classic drink or something adventurous and new, our mobile cocktail
            bar has something for everyone, ensuring your event is as enjoyable
            as it is memorable."
          </p>
        </div>
        <div className="services-item " id="services-body-2">
          <h1>Premium Service</h1>
          <p>
            "Our team of premium mixologists has dedicated years to mastering
            their craft, honing their skills to deliver the finest drinks and
            impeccable service. With their expertise, we create cocktails that
            are not only delicious but also artfully presented. Once you've
            experienced our extraordinary creations, you'll find yourself coming
            back for more. Whether it's a classic cocktail or a custom blend, we
            promise an unforgettable taste experience that will leave you
            wanting another round."
            <br />
          </p>
        </div>
        <div className="services-item image4">4</div>
      </div>
    </>
  );
};

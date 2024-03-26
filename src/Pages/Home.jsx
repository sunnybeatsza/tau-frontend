import React from "react";
import { Navbar } from "../Components/Navbar";
import SimpleSlider from "../Components/Slider";
import { Hero } from "../Components/Hero";
import { ServicesHero } from "../Components/Services-Hero";
import { Services } from "../Components/Services";
import { Contact } from "../Components/Contact";
import { Footer } from "../Components/Footer";
import { AboutUs } from "../Components/AboutUs";

export const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <div>
        <Hero />
      </div>

      <div>
        <SimpleSlider />
      </div>

      <div>
        <ServicesHero />
      </div>

      <div>
        <Services />
      </div>

      <div>
        <AboutUs />
      </div>

      <div>
        <Contact />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

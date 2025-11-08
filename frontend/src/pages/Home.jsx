import React from "react";
import Navbar from "../components/Navbar";
import { Banner } from "../components/home/Banner";
import { Features } from "../components/home/Features";
import Hero from "../components/home/Hero";
import Testimonial from "../components/home/Testimonial";
import CallToAction from "../components/home/CallToAction";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Banner />
      <Hero />
      <section id="features">
        <Features />
      </section>
      <section id="testimonials">
        <Testimonial />
      </section>
      <section id="contact">
        <CallToAction />
        <Footer />
      </section>
    </div>
  );
};

export default Home;

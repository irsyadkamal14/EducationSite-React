import React from "react";
import Navbar from "../components/Navbar.js";
import Hero from "../components/Hero.js";
import AboutN from "../components/AboutN.js";
import Information from "../components/Information.js";
import Recomend from "../components/Recomended.js";
import Book from "../components/Book.js";
import Footer from "../components/Footer.js";
import Question from "../components/Question.js";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutN />
      <Information />
      <Recomend />
      <Book />
      <Question />
      <Footer />
    </div>
  );
};

export default Main;

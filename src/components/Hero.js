import React from "react";
import Heroimg from "../assets/images/hero.svg";

const Hero = () => {
  return (
    <div className="container" id="hero">
      <section className="hero-section">
        <div>
          <p class="title-section">I read books gain knowledge</p>
          <h1>
            Baca Buku Seru di <span>Zenlib</span>
          </h1>
          <p class="title-content">
            Lorem ipsum dolor sit amet consectetur. Eget sit leo consequat non
            eget maecenas risus lacus vivamus. Lorem netus commodo at vel et
            integer.
          </p>
          <a className="btn-hero" href="#book">
            Cari Buku
          </a>
        </div>
        <img src={Heroimg} alt="hero" />
      </section>
    </div>
  );
};

export default Hero;

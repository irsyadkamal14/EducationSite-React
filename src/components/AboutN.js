import React from "react";
import Aboutimg from "../assets/images/article.svg";
const AboutN = () => {
  return (
    <div className="container" id="about">
      <section className="articel-section">
        <div className="row-1">
          <img src={Aboutimg} alt="artikel" />
        </div>
        <div className="row-2">
          <p className="title-section">Reliable information</p>
          <h1>Membaca buku sangat baik untuk melatih otak dan pikiran</h1>
          <p className="content-section">
            Dengan membaca buku, dapat membantu otak untuk menjalankan fungsinya
            dengan sempurna karena pada saat membaca otak harus berpikir,
            menganalisis masalah, dan mencari solusi sehingga dapat menemukan
            hal-hal baru.
          </p>
        </div>
        <div className="ellipse-1"></div>
        <div className="ellipse-2"></div>
        <div className="ellipse-3"></div>
      </section>
    </div>
  );
};

export default AboutN;

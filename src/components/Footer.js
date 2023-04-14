import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="footer-section">
        <div className="container">
          <div className="footer-content">
            <div className="title-footer">
              <h1>ZenLib</h1>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <div className="icon-bottom">
                <i className="fa-sharp fa-solid fa-award"></i>
                <i className="fa-sharp fa-solid fa-school"></i>
              </div>
            </div>
            <div className="content-footer">
              <h2>Our Company</h2>
              <p>Home</p>
              <p>About</p>
              <p>Service</p>
              <p>News</p>
              <p>Contact</p>
            </div>
            <div className="content-footer">
              <h2>Services</h2>
              <p>Market Research</p>
              <p>Market Analysis</p>
              <p>SEO Consultancy</p>
              <p>Page Ranking</p>
              <p>SMM</p>
            </div>
          </div>
        </div>
      </section>
      <div className="copyrights">
        <p>All Copyrights are reserved my ZenLib Team</p>
      </div>
    </div>
  );
};

export default Footer;

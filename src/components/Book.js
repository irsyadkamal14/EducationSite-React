import React from "react";
import book1 from "../assets/images/book1.svg";
import book2 from "../assets/images/book2.svg";
import book3 from "../assets/images/book3.svg";

const Book = () => {
  return (
    <section className="reading-section">
      <div className="container" id="book">
        <div className="reading-content">
          <h1>Reading Book Information On ZenLib</h1>
          <a>View More</a>
        </div>
        <div className="book-read">
          <img src={book1} alt="Book Read" />
          <img src={book2} alt="Book Read" />
          <img src={book3} alt="Book Read" />
          <img src={book1} alt="Book Read" />
          <img src={book3} alt="Book Read" />
          <img src={book2} alt="Book Read" />
          <img src={book3} alt="Book Read" />
          <img src={book2} alt="Book Read" />
          <img src={book1} alt="Book Read" />
          <img src={book2} alt="Book Read" />
        </div>
      </div>
    </section>
  );
};

export default Book;

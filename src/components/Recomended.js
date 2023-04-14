import React, { useRef, useState } from "react";
import Book1 from "../assets/images/book1.svg";
import Book2 from "../assets/images/book2.svg";
import Book3 from "../assets/images/book3.svg";
import People1 from "../assets/images/people1.svg";
import People2 from "../assets/images/people2.svg";
import People3 from "../assets/images/people3.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Recomended = () => {
  return (
    <section className="recomended-section" id="popular">
      <div className="container">
        <p className="title-section">Reliable information</p>
        <h1>Most Popular Reading Books</h1>
        <p className="content-section">
          Lorem ipsum dolor sit amet consectetur. Eu habitasse semper eu amet
          magnis porttitor vivamus lacus nisl. Nunc at in non ac sodales id id
          facilisis neque. Sed natoque imperdiet praesent tortor malesuada
          tempor eget. Urna pharetra duis risus aliquam sit volutpat nibh tempor
          amet.
        </p>

        <div class="slide-content">
          <Swiper
            slidesPerView={3}
            spaceBetween={5}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <div class="card-wrapper swiper-wrapper">
              <SwiperSlide>
                <div class="card swiper-slide">
                  <img class="image-content" src={Book1} alt="ratting book" />
                  <div class="card-content">
                    <div class="profile-content">
                      <img src={People1} alt="Reviewer" />
                      <h3>Lucas Enembe</h3>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Amet arcu id donec
                      nec aliquam ut ultricies.
                    </p>
                    <div class="ratting-content">
                      <p>Religius</p>
                      <p>Mystery</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="card swiper-slide">
                  <img class="image-content" src={Book2} alt="ratting book" />
                  <div class="card-content">
                    <div class="profile-content">
                      <img src={People2} alt="Reviewer" />
                      <h3>Lucas Enembe</h3>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Amet arcu id donec
                      nec aliquam ut ultricies.
                    </p>
                    <div class="ratting-content">
                      <p>Religius</p>
                      <p>Mystery</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="card swiper-slide">
                  <img class="image-content" src={Book3} alt="ratting book" />
                  <div class="card-content">
                    <div class="profile-content">
                      <img src={People3} alt="Reviewer" />
                      <h3>Lucas Enembe</h3>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Amet arcu id donec
                      nec aliquam ut ultricies.
                    </p>
                    <div class="ratting-content">
                      <p>Religius</p>
                      <p>Mystery</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="card swiper-slide">
                  <img class="image-content" src={Book1} alt="ratting book" />
                  <div class="card-content">
                    <div class="profile-content">
                      <img src={People1} alt="Reviewer" />
                      <h3>Lucas Enembe</h3>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Amet arcu id donec
                      nec aliquam ut ultricies.
                    </p>
                    <div class="ratting-content">
                      <p>Religius</p>
                      <p>Mystery</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="card swiper-slide">
                  <img class="image-content" src={Book2} alt="ratting book" />
                  <div class="card-content">
                    <div class="profile-content">
                      <img src={People2} alt="Reviewer" />
                      <h3>Lucas Enembe</h3>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Amet arcu id donec
                      nec aliquam ut ultricies.
                    </p>
                    <div class="ratting-content">
                      <p>Religius</p>
                      <p>Mystery</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="card swiper-slide">
                  <img class="image-content" src={Book3} alt="ratting book" />
                  <div class="card-content">
                    <div class="profile-content">
                      <img src={People3} alt="Reviewer" />
                      <h3>Lucas Enembe</h3>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Amet arcu id donec
                      nec aliquam ut ultricies.
                    </p>
                    <div class="ratting-content">
                      <p>Religius</p>
                      <p>Mystery</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="card swiper-slide">
                  <img class="image-content" src={Book1} alt="ratting book" />
                  <div class="card-content">
                    <div class="profile-content">
                      <img src={People1} alt="Reviewer" />
                      <h3>Lucas Enembe</h3>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Amet arcu id donec
                      nec aliquam ut ultricies.
                    </p>
                    <div class="ratting-content">
                      <p>Religius</p>
                      <p>Mystery</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="card swiper-slide">
                  <img class="image-content" src={Book2} alt="ratting book" />
                  <div class="card-content">
                    <div class="profile-content">
                      <img src={People2} alt="Reviewer" />
                      <h3>Lucas Enembe</h3>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Amet arcu id donec
                      nec aliquam ut ultricies.
                    </p>
                    <div class="ratting-content">
                      <p>Religius</p>
                      <p>Mystery</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="card swiper-slide">
                  <img class="image-content" src={Book3} alt="ratting book" />
                  <div class="card-content">
                    <div class="profile-content">
                      <img src={People3} alt="Reviewer" />
                      <h3>Lucas Enembe</h3>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Amet arcu id donec
                      nec aliquam ut ultricies.
                    </p>
                    <div class="ratting-content">
                      <p>Religius</p>
                      <p>Mystery</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Recomended;

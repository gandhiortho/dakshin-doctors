"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import AnimatedText from "../common/AnimatedText";

const StyleThreeHeader = () => {
  return (
    <>
      <section className="header header-3">
        <Swiper
          className="header-carousel"
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          speed={1000}
          grabCursor={true}
          slidesPerView={1}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            991: { slidesPerView: 1 },
          }}
        >
          <SwiperSlide>
            <div
              className="sec-hero display-table"
              style={{
                backgroundImage: "url(/assets/images/header/05_header.webp)",
              }}
            >
              <div className="table-cell">
                <div className="overlay"></div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 d-flex align-items-center justify-content-between">
                      <div className="banner">
                        <h1 className="handline splt-txt wow">
                          <AnimatedText text="Best Doctor & Medical Care" />
                        </h1>
                        <p className="about-website splt-txt wow">
                          <AnimatedText
                            text="MedDoctors Are A Medical And Health Department
                          Provider Institutions. Suitable For Healthcare,
                          Medical, Doctor, Dental, Dentist, Pharmacy, Health And
                          Any Related Medical Care Field."
                          />
                        </p>
                        <Link
                          className="btn-1 move-section  wow fadeInUp"
                          data-wow-delay=".3s"
                          href="#start"
                        >
                          Let's Start
                        </Link>
                        <Link
                          className="btn-1 btn-2 ml-30  wow fadeInUp"
                          data-wow-delay=".5s"
                          href="/department-3"
                        >
                          Our Department
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center justify-content-end header-features">
                      <div className="features-box">
                        <div className="item wow fadeInUp" data-wow-delay=".3s">
                          <i className="flaticon-doctor-1"></i>
                          <div className="item-content">
                            <h4>Professional Doctor</h4>
                            <p>
                              Lorem Ipsum is simply text of <br />
                              the printing.
                            </p>
                          </div>
                        </div>
                        <div
                          className="item active wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <i className="flaticon-medicine"></i>
                          <div className="item-content">
                            <h4>The Best Departments</h4>
                            <p>
                              Lorem Ipsum is simply text of <br />
                              the printing.
                            </p>
                          </div>
                        </div>
                        <div className="item wow fadeInUp" data-wow-delay=".7s">
                          <i className="flaticon-cross"></i>
                          <div className="item-content">
                            <h4>Standards Of Treatments</h4>
                            <p>
                              Lorem Ipsum is simply text of <br />
                              the printing.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="sec-hero display-table"
              style={{
                backgroundImage: "url(/assets/images/header/01_header.webp)",
              }}
            >
              <div className="table-cell">
                <div className="overlay"></div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="banner">
                        <h1 className="handline">
                          take Best Quality Treatment
                        </h1>
                        <p className="about-website">
                          MedDoctors Are A Medical And Health Department
                          Provider Institutions. Suitable For Healthcare,
                          Medical, Doctor, Dental, Dentist, Pharmacy, Health And
                          Any Related Medical Care Field.
                        </p>
                        <Link className="btn-1 btn-2" href="/appointment">
                          make an appointment
                        </Link>
                        <Link className="btn-1 btn-3 ml-30" href="/about-3">
                          Discover More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="sec-hero display-table"
              style={{
                backgroundImage: "url(/assets/images/header/03_header.webp)",
              }}
            >
              <div className="table-cell">
                <div className="overlay"></div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="banner">
                        <h1 className="handline">Care Whenever You Need It</h1>
                        <p className="about-website">
                          MedDoctors Are A Medical And Health Department
                          Provider Institutions. Suitable For Healthcare,
                          Medical, Doctor, Dental, Dentist, Pharmacy, Health And
                          Any Related Medical Care Field.
                        </p>
                        <Link className="btn-1 btn-2" href="/about-3">
                          More About Us
                        </Link>
                        <Link className="btn-1 btn-3 ml-30" href="/about-3">
                          Discover More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </section>
    </>
  );
};

export default StyleThreeHeader;

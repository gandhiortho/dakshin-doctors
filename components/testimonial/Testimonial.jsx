"use client";
import React from "react";
import { testimonialsData } from "@/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ItemTestimonial from "./ItemTestimonial";

const Testimonial = () => {
  return (
    <section className="testimonial py-100">
      <div className="bg-section">
        <div className="overlay overlay-2"></div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 padding-0 wow fadeInUp" data-wow-delay="0.3s">
            <div className="testimonial-img-box">
              <div
                className="img-box"
                style={{
                  backgroundImage:
                    "url(/assets/images/testimonial/01_testimonial-say.webp)",
                }}
              ></div>
            </div>
          </div>
          <div className="col-md-7 padding-0 wow fadeInUp" data-wow-delay="0.5s">
            <div className="testimonial-text-box">
              <Swiper
                className="testimonial-carousel"
                modules={[Autoplay]}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: true }}
                speed={1000}
                slidesPerView={1}
              >
                {testimonialsData.map((item) => (
                  <SwiperSlide key={item.name}>
                    <ItemTestimonial data={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

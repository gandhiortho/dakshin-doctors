"use client";
import React from "react";
import { testimonialsData } from "@/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import StyleThreeItemTestimonial from "./StyleThreeItemTestimonial";

const StyleThreeTestimonial = () => {
  return (
    <section className="testimonial testimonial-2 testimonial-3 py-100">
      <div className="container">
        <div className="row wow fadeInUp" data-wow-delay=".3s">
          <div className="col-md-10 offset-md-1">
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
                  <StyleThreeItemTestimonial data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleThreeTestimonial;

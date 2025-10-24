"use client";
import React from "react";
import SecTitle from "../common/SecTitle";
import { provideData } from "@/data/provide";
import ContentProvide from "./ContentProvide";
import Quote from "../quote/Quote";
import { useShareData } from "@/context/ShareDataContext";

const Provide = ({ navbarStyle = 1, className = "provide" }) => {
  const { showYoutubeVideoUrlHandel } = useShareData();
  return (
    <>
      <section className={className}>
        <div className="bg-section">
          <div className="overlay overlay-3"></div>
        </div>
        <div className="container">
          <SecTitle
            navbarStyle={navbarStyle}
            title={provideData.title}
            subTitle={provideData.subtitle}
            description={provideData.description}
            button={provideData.button}
          />
          <div className="provide-content">
            <div className="row">
              {provideData.features.map((item, index) => (
                <div key={item.title} className="col-md-6 col-lg-3">
                  <ContentProvide data={item} delay={`${0.3 + index * 0.1}s`} />
                </div>
              ))}
            </div>
          </div>

          <div className="quote-and-presentation">
            <div className="row">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <Quote />
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="video-presentation">
                  <div className="overlay"></div>
                  <div className="presentation-box">
                    <button
                      aria-label="pulse-2"
                      className="pulse"
                      onClick={() =>
                        showYoutubeVideoUrlHandel(
                          "https://www.youtube.com/embed/TKnufs85hXk?si=28-Wg09VkcMw2l_I"
                        )
                      }
                    >
                      <i className="fas fa-play"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Provide;

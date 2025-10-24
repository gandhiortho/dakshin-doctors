"use client";
import React from "react";
import SecTitle from "../common/SecTitle";
import { provideThreeData } from "@/data/provide";
import Quote from "../quote/Quote";
import ItemStatistic from "../statistic/ItemStatistic";

const StyleThreeProvide = ({ navbarStyle = 1 }) => {
  return (
    <>
      <section className="provide provide-home-2">
        <div className="bg-section">
          <div className="overlay overlay-3"></div>
        </div>
        <div className="container">
          <SecTitle
            navbarStyle={navbarStyle}
            title={provideThreeData.SecTitle.title}
            subTitle={provideThreeData.SecTitle.subTitle}
            description={provideThreeData.SecTitle.description}
            button={provideThreeData.SecTitle.button}
          />
          <div className="provide-content">
            <div className="row">
              {provideThreeData.statistics.map((item) => (
                <div key={item.label} className="col-sm-6 col-lg-3">
                  <ItemStatistic data={item} />
                </div>
              ))}
            </div>
          </div>

          <div className="quote-and-presentation">
            <div className="row wow fadeInUp" data-wow-delay=".3s">
              <div className="col">
                <div className="quote-box">
                  <div className="row">
                    <div className="col-lg-4">
                      <div
                        className="quote-img-box"
                        style={{
                          backgroundImage:
                            "url(/assets/images/qoute/01_quote.webp)",
                        }}
                      ></div>
                    </div>
                    <div className="col-lg-8">
                      <Quote className="quote-text-box form-contact" />
                    </div>
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

export default StyleThreeProvide;

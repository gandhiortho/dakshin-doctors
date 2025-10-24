import React from "react";
import { features2Data } from "@/data/features";
import StyleTwoItemFeatures from "./StyleTwoItemFeatures";

const StyleTwoFeatures = () => {
  return (
    <section className="features-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              {features2Data.features.map((item, index) => (
                <div key={item.title} className="col-sm-6 wow fadeInUp" data-wow-delay={`${0.3 + index * 0.1}s`}>
                  <StyleTwoItemFeatures data={item} index={index} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="features-opening-hours">
              <i className="flaticon-globe wow fadeInUp" data-wow-delay="0.3s"></i>
              <h4 className="wow fadeInUp" data-wow-delay="0.5s">Open - Closed Time</h4>
              <ul className="opening-hours wow fadeInUp" data-wow-delay="0.7s">
                {features2Data.openingHours.map((item) => (
                  <li key={item.day}>
                    {item.day}
                    <span>{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleTwoFeatures;

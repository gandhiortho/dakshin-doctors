import React from "react";
import SecTitle from "../common/SecTitle";
import { aboutThreeData } from "@/data/about";
import Link from "next/link";
import CountUp from "../common/CountUp";
import AnimatedText from "../common/AnimatedText";

const StyleThreeAbout = () => {
  return (
    <section className="about-us about-us-3 py-100" id={aboutThreeData.id}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-img-box">
              <div
                className="img-box"
                style={{
                  backgroundImage: `url(${aboutThreeData.aboutImageBox.backgroundImage})`,
                }}
              ></div>
              {aboutThreeData.experience && (
                <div className="about-experience">
                  <i className="flaticon-stethoscope"></i>
                  <div className="experience-counter wow fadeInUp" data-wow-delay=".3s">
                    <CountUp
                      start={0}
                      end={aboutThreeData.experience.counter}
                      duration={2}
                    />
                  </div>
                  <h5 className="splt-txt wow"><AnimatedText text={aboutThreeData.experience.label} /></h5>
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-text-box">
              <SecTitle
                style={2}
                title={aboutThreeData.secTitle.title}
                subTitle={aboutThreeData.secTitle.subTitle}
              />
              <p className="wow fadeInUp" data-wow-delay=".3s">
                MedDoctors Are A Medical And Health Department Provider
                Institutions. Suitable For Healthcare, Medical, Doctor, Dental,
                Dentist, Pharmacy, Health And Any Related Medical Care Field.
              </p>
              <p className="last wow fadeInUp" data-wow-delay=".5s">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <div className="row">
                <div className="col wow fadeInUp" data-wow-delay=".7s">
                  <Link className="btn-1" href="/about-3">
                    Discover About More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleThreeAbout;

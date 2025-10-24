"use client";
import React from "react";
import Widget from "../widget/Widget";
import { departmentsDetailsData } from "@/data/departments";
import { useShareData } from "@/context/ShareDataContext";
import FAQs from "../common/FAQs";
import ItemBlog from "../blog/ItemBlog";

const DepartmentDetails = () => {
  const { showYoutubeVideoUrlHandel } = useShareData();
  return (
    <section className="single-department py-100-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="sidebar-department mr-20">
              <Widget style="department" data={departmentsDetailsData.widgets} />
              <Widget style="search" />
              <Widget style="instagram" data={departmentsDetailsData.widgets} />
              <Widget style="tags" data={departmentsDetailsData.widgets} />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="single-department-box">
              <h2>{departmentsDetailsData.title}</h2>
              <p>{departmentsDetailsData.description}</p>
              {departmentsDetailsData.benefits && (
                <>
                  <h3>benfits</h3>
                  <ul className="about-core">
                    {departmentsDetailsData.benefits.map((item) => (
                      <li key={item}>
                        <i className="fas fa-check-double"></i>
                        <h4>{item}</h4>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {departmentsDetailsData.videoPresentationUrl && (
                <>
                  <h3>video presentation</h3>
                  <p>
                    MedDoctors Are A Medical And Health Department Provider
                    Institutions. Suitable For Healthcare, Medical, Doctor,
                    Dental, Dentist, Pharmacy, Health And Any Related Medical
                    Care Field.
                  </p>
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
                </>
              )}
              {departmentsDetailsData.faqs && (
                <>
                  <h3>General Ask</h3>
                  <FAQs data={departmentsDetailsData.faqs} />
                </>
              )}
              {departmentsDetailsData.blogs && (
                <>
                  <div className="row">
                    {departmentsDetailsData.blogs.map((item) => (
                      <div key={item.title} className="col-md-6 col-lg-6">
                        <ItemBlog data={item} />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentDetails;

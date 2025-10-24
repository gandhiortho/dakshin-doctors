"use client"
import React, { useEffect } from "react";

const FAQs = ({ data }) => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    data && (
      <div className="faq">
        {data.map(({ id, question, answer, show }, index) => (
          <div className="faq-box" key={question}>
            <h5 className="question-header">
              <button
                className="btn btn-primary click"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#faqs-${id}`}
                aria-expanded={show}
                aria-controls={`faqs-${id}`}
              >
                {question}
                <i className="fas fa-angle-right"></i>
              </button>
            </h5>
            <div
              className={show ? "collapse show" : "collapse"}
              id={`faqs-${id}`}
            >
              <div
                className="card card-body about-text"
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default FAQs;

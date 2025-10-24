import Link from "next/link";
import React from "react";

const FactArea = () => {
  return (
    <section className="fact-area py-100">
      <div className="overlay overlay-2"></div>
      <div className="container">
        <div className="sec-title text-center">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <h2 className="wow fadeInUp" data-wow-delay=".3s">need a doctor for check up?</h2>
              <h3 className="wow fadeInUp" data-wow-delay=".5s">just make an appointment</h3>
              <p className="sec-explain wow fadeInUp" data-wow-delay=".7s">
                MedDoctors Are A Medical And Health Department Provider
                Institutions. Suitable For Healthcare, Medical, Doctor, Dental,
                Dentist, Pharmacy, Health And Any Related Medical Care Field.
              </p>
              <Link className="btn-1 btn-3 sec-btn wow fadeInUp" data-wow-delay=".9s" href="/appointment-2">
                Get an appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactArea;

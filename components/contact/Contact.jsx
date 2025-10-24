import React from "react";
import FormContact from "./FormContact";

const Contact = () => {
  return (
    <div className="contact-us py-100">
      <div className="container">
        <div className="contact-info-content">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="contact-box">
                <i className="flaticon-call"></i>
                <div className="box">
                  <a className="phone" href="tel:0088609830">
                    008860 9830
                  </a>
                  <a className="phone" href="tel:9908300885">
                    990830 0885
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="contact-box">
                <i className="flaticon-email"></i>
                <div className="box">
                  <a className="mail" href="mailto:support@MedDoctors.com">
                    Support@MedDoctors.com
                  </a>
                  <a className="mail" href="mailto:mailbox@ar-coder.com">
                    MailBox@AR-Coder.com
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="contact-box">
                <i className="flaticon-location"></i>
                <div className="box">
                  <p>14D Street Brooklyn,</p>
                  <p>New York.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="map-box">
              <iframe src="https://maps.google.com/maps?q=manhatan&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
            </div>
          </div>
          <div className="col-lg-6">
            <FormContact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

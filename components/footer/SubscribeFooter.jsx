"use client";
import React, { useState } from "react";

const SubscribeFooter = () => {
  const [subscribeForm, setSubscribeForm] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!subscribeForm) {
      alert("Please Enter Your Email Address");
      return;
    }
    console.log("subscribeForm", subscribeForm);
  };
  return (
    <div className="newsletter">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-between wow fadeInUp" data-wow-delay="0.3s">
            <h5>Subscribe to our newsletter</h5>
          </div>
          <div className="col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Your Email Address...."
                value={subscribeForm}
                onChange={(event) => {
                  setSubscribeForm(event.target.value);
                }}
              />
              <button onClick={handleSubmit}>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeFooter;

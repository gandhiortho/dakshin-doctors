import React from "react";

const StyleTwoItemFeatures = ({ data, index }) => {
  return (
    <div
      className={`features-item ${index === 0 && "first"} ${
        index === 1 && "last"
      }`}
    >
      <i className={`features-icon ${data.icon}`}></i>
      <div className="item-text">
        <h4>{data.title}</h4>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default StyleTwoItemFeatures;

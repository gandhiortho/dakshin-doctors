import React from "react";

const ContentProvide = ({ data, delay }) => {
  return (
    <div className="provide-content-box wow fadeInUp" data-wow-delay={delay}>
      <i className={data.icon}></i>
      <div className="content-box">
        <h4 dangerouslySetInnerHTML={{ __html: data.title }} />
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default ContentProvide;

import Link from "next/link";
import React from "react";

const ItemFeatures = ({ data, index, delay }) => {
  return (
    <div className="col-lg-4 padding-0">
      <div className={`features-item ${index}`}>
        <i className={`features-icon wow fadeInUp ${data.icon}`} data-wow-delay={delay}></i>
        <div className="item-text wow fadeInUp" data-wow-delay={delay}>
          <h4>{data.title}</h4>
          <p>{data.description}</p>
          {data.type == "phone" && (
            <Link className="phone" href={data.contact.href}>
              <i className={data.contact.icon}></i> {data.contact.text}
            </Link>
          )}
          {data.type == "button" && (
            <Link className={data.link.className} href={data.link.href}>
              {data.link.text}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemFeatures;

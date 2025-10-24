import React from "react";
import { featuresData } from "@/data/features";
import ItemFeatures from "./ItemFeatures";

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="row all-features-item">
          {featuresData.map((item, index) => (
            <ItemFeatures
              key={item.title}
              data={item}
              delay={`${0.3 + index * 0.1}s`}
              index={
                index === 0
                  ? "one"
                  : index === 1
                  ? "two"
                  : index === 2
                  ? "three"
                  : null
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

import React from "react";
import { careersData } from "@/data/careers";
import ItemCareers from "./ItemCareers";

const Careers = () => {
  return (
    <div className="careers py-100-70">
      <div className="container">
        <div className="row">
          {careersData.map((item) => (
            <div key={item.title} className="col-md-6 col-lg-4">
              <ItemCareers data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;

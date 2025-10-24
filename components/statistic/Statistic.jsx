import React from "react";
import { statisticData } from "@/data/statistic";
import ItemStatistic from "./ItemStatistic";

const Statistic = () => {
  return (
    <div className="statistic">
      <div className="container">
        <div className="row">
          {statisticData.map((item, index) => (
            <div key={item.label} className="col-sm-6 col-lg-3">
              <ItemStatistic data={item} delay={`${0.3 + index * 0.1}s`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistic;

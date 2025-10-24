import React from "react";
import { doctorsData } from "@/data/doctors";
import SecTitle from "../common/SecTitle";
import ItemDoctors from "./ItemDoctors";

const Doctors = ({ navbarStyle = 1 }) => {
  return (
    <section className="doctors py-100-70">
      <div className="container">
        <SecTitle
          navbarStyle={navbarStyle}
          title={doctorsData.title}
          subTitle={doctorsData.subtitle}
          description={doctorsData.description}
          button={doctorsData.button}
        />
        <div className="row">
          {doctorsData.doctors.map((item, index) => (
            <div key={item.name} className="col-md-6 col-lg-4">
              <ItemDoctors data={item} delay={`${0.3 + index * 0.1}s`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;

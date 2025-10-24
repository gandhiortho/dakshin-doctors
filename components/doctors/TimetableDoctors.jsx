import React from "react";
import { timetableData } from "@/data/doctors";
import SecTitle from "../common/SecTitle";

const TimetableDoctors = () => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <section className="doctors-timetable py-100">
      <div className="container">
        <SecTitle
          navbarStyle={1}
          title="Make Your Appointment In Right Schedule"
          subTitle="Doctors Timetable"
          description="MedDoctors Are A Medical And Health Department Provider Institutions. Suitable For Healthcare, Medical, Doctor, Dental, Dentist, Pharmacy, Health And Any Related Medical Care Field."
        />
        <div className="row">
          <div className="col-lg-12">
            <div className="box-appointment-doctors">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Time Table</th>
                    {days.map((day) => (
                      <th key={day} scope="col">
                        {day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {timetableData.map((slot, index) => (
                    <tr key={index}>
                      <th scope="row">{slot.time}</th>
                      {days.map((day) => (
                        <td
                          key={day}
                          className={
                            slot.schedule[day]
                              ? `active-${slot.schedule[day].className}`
                              : ""
                          }
                        >
                          {slot.schedule[day] && (
                            <div className="appointment-doctors">
                              <h4>{slot.schedule[day].doctor}</h4>
                              <span>{slot.schedule[day].time}</span>
                            </div>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimetableDoctors;

import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentModal from "./AppointmentModal";
import AppointmentService from "./AppointmentService";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/service`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <p className="text-center mt-20 text-xl font-semibold text-secondary">
        Available Appointments on {format(date, "PP")}.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-20 md:grid-cols-2 gap-5">
        {services.map((service) => (
          <AppointmentService
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></AppointmentService>
        ))}
      </div>
      {treatment && (
        <AppointmentModal date={date} setTreatment={setTreatment} treatment={treatment}></AppointmentModal>
      )}
    </div>
  );
};

export default AvailableAppointments;

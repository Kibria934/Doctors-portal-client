import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentModal from "./AppointmentModal";
import AppointmentService from "./AppointmentService";
import { useQuery } from "react-query";
import Loading from "../SharedPage/Loading";

const AvailableAppointments = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, "PP");

  const { data: services, isLoading,refetch } = useQuery(
    ["available", formattedDate],
    () => fetch(`https://shrouded-wildwood-70641.herokuapp.com/available?date=${formattedDate}`).then(
        (res) => res.json()));
    
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <p className="text-center mt-20 text-xl font-semibold text-secondary">
        Available Appointments on {format(date, "PP")}.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-20 md:grid-cols-2 gap-5">
        {services?.map((service) => (
          <AppointmentService
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></AppointmentService>
        ))}
      </div>
      {treatment && (
        <AppointmentModal
          date={date}
          setTreatment={setTreatment}
          treatment={treatment}
          refetch={refetch}
        ></AppointmentModal>
      )}
    </div>
  );
};

export default AvailableAppointments;

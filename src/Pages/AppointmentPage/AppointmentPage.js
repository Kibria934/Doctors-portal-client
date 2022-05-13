import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Footer from "../SharedPage/Footer";
import Loading from "../SharedPage/Loading";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointments from "./AvailableAppointments";

const AppointmentPage = () => {
  const [date, setDate] = useState(new Date());
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    <Loading></Loading>;
  }
  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AvailableAppointments date={date}></AvailableAppointments>
      <Footer></Footer>
    </div>
  );
};

export default AppointmentPage;

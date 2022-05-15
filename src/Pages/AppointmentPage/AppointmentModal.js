import React from "react";
import { format } from "date-fns";
import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../SharedPage/Loading";
import { toast } from "react-toastify";

const AppointmentModal = ({ treatment, date, setTreatment,refetch }) => {
  const { _id, name, slots } = treatment;
  const [user, loading, error] = useAuthState(auth);
  const formattedDate = format(date, "PP");
  if (loading) {
    <Loading></Loading>;
  }
  const handleBooking = (e) => {
    e.preventDefault();
    const slot= e.target.slots.value;
    const bookingData = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: e.target.phone.value,
    };

    fetch(`http://localhost:5000/booking`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((booking) => {
        console.log(booking);
        if(booking.success){
          toast(`Your appointment has been set at ${formattedDate} on ${slot} for ${name}`)
        }
        else{
          toast.error(`Your appointment already set at ${booking.booking.date} on ${booking.booking.slot}.for ${booking.booking.treatment}`)

        }
        refetch()
        setTreatment(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="appointment-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="appointment-modal"
            className="btn btn-accent btn-circle absolute right-2 top-2"
          >
            X
          </label>
          <h3 className="font-bold text-2xl">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="mt-10 grid grid-cols-1 justify-items-center"
          >
            <input
              type="text"
              name="time"
              placeholder="Type here"
              value={format(date, "PP")}
              readOnly
              className="bg-[#E6E6E6] text-black p-3 m-2 rounded-md w-full"
            />
            <select
              name="slots"
              className="select bg-[#E6E6E6] p-3 m-2 rounded-md w-full"
            >
              {slots.map((s, index) => (
                <option key={index} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              value={user?.displayName}
              readOnly
              placeholder="Full Name"
              className="bg-[#fff] text-lg border-2 p-3 m-2 rounded-md w-full"
            />
            <input
              type="email"
              name="email"
              value={user?.email}
              readOnly
              placeholder="Email"
              className="bg-[#fff] text-lg border-2 p-3 m-2 rounded-md w-full"
            />
            <input
              type="number"
              name="phone"
              autoComplete="none"
              placeholder="Phone Number"
              className="bg-[#fff] text-lg border-2 p-3 m-2 rounded-md w-full"
            />
            <input
              type="submit"
              value="submit"
              placeholder="Type here"
              className="btn btn-accent text-white w-full "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;

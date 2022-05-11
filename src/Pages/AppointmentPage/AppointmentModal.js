import React from "react";
import { format } from "date-fns";
import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";

const AppointmentModal = ({ treatment, date,setTreatment }) => {
  const {_id, name, slots } = treatment;

  const handleBooking = (e) => {
    e.preventDefault();
    const time = e.target.time.value;
    const slots = e.target.slots.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    console.log(time,slots,name,email,phone);
    setTreatment(null)
  };

  return (
    <div>
      <input type="checkbox" id="appointment-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="appointment-modal"
            class="btn btn-accent btn-circle absolute right-2 top-2"
          >
            X
          </label>
          <h3 class="font-bold text-2xl">{name}</h3>
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
              class="select bg-[#E6E6E6] p-3 m-2 rounded-md w-full"
            >
              {slots.map((s) => (
                <option  value={s}>{s}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="bg-[#fff] text-lg border-2 p-3 m-2 rounded-md w-full"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="bg-[#fff] text-lg border-2 p-3 m-2 rounded-md w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-[#fff] text-lg border-2 p-3 m-2 rounded-md w-full"
            />
            <input
              type="submit"
              value="submit"
              placeholder="Type here"
              class="btn btn-accent text-white w-full "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;

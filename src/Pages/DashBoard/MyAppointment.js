import React, { useEffect, useState } from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../SharedPage/Loading";
import AppointmentBanner from "../AppointmentPage/AppointmentBanner";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const MyAppointment = () => {
  const [appointments, setAppointment] = useState([]);
  const [user, loading] = useAuthState(auth);
  let navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return <Loading />;
    }

    if (user) {
      fetch(
        `https://shrouded-wildwood-70641.herokuapp.com/bookings?patient=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            return navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setAppointment(data);
          console.log(appointments);
        });
    }
  }, []);
console.log(appointments);

  return (
    <div>
      <h5>My appointment:{appointments.length}</h5>
      <div className="overflow-x-auto">
        <table className="table lg:w-full">
          <thead>
            <tr>
              <th></th>
              <th>name</th>
              <th>date</th>
              <th>time</th>
              <th>treatment</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, index) => (
              <tr key={a._id}>
                <th>{index + 1}</th>
                <td>{a.patientName}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
                <td>
                  {a.price && !a.paid && (
                      <Link to={`/dashboard/payment/${a._id}`}>
                        <button className="btn btn-primary max-w-xs">
                          Pay
                        </button>
                      </Link>
                    )}
                    {
                      a.price &&  a.paid && 
                     <>
                      <span className="text-orange-500 text-xl font-semibold max-w-xs">
                        Paid
                      </span>
                      <p >transection:<span className="text-success">{a.transactionId}</span></p>
                      </>
                    }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;

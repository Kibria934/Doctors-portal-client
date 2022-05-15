import React, { useEffect, useState } from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../SharedPage/Loading";
import AppointmentBanner from "../AppointmentPage/AppointmentBanner";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const MyAppointment = () => {
  const [appintments, setAppointment] = useState([]);
  const [user, loading] = useAuthState(auth);
  let navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return <Loading />;
    }
    if (user) {
      fetch(`http://localhost:5000/bookings?patient=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            return navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);

          setAppointment(data);
        });
    }
  }, []);

  return (
    <div>
      <h5>My appointment:{appintments.length}</h5>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>name</th>
              <th>date</th>
              <th>time</th>
              <th>treatment</th>
            </tr>
          </thead>
          <tbody>
            {appintments.map((a, index) => (
              <tr key={a._id}>
                <th>{index + 1}</th>
                <td>{a.patientName}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;

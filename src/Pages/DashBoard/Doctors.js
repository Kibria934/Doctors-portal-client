import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../SharedPage/Loading";
import DeleteModal from "./DeleteModal";
import DoctorRow from "./DoctorRow";

const Doctors = () => {
  const [deleteModal, setDeleteModal] = useState(null);

  const {
    data: doctor,
    isLoading,
    refetch,
  } = useQuery("doctor", () =>
    fetch(`https://shrouded-wildwood-70641.herokuapp.com/doctor`).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  console.log(doctor);

  return (
    <div>
      <h5 className="text-xl m-3"> Present Doctors: {doctor.length}</h5>

      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {doctor.map((d, index) => (
              <DoctorRow
                setDeleteModal={setDeleteModal}
                refetch={refetch}
                info={d}
                index={index}
                key={index}
              ></DoctorRow>
            ))}
          </tbody>
        </table>
      </div>
      {deleteModal && (
        <DeleteModal
          deleteModal={deleteModal}
          setDeleteModal={setDeleteModal}
          refetch={refetch}
        ></DeleteModal>
      )}
    </div>
  );
};

export default Doctors;

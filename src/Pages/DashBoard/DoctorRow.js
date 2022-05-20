import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ index, info,refetch,setDeleteModal }) => {
  const { img, name, email, specialty } = info;
  console.log(info);



  return (
    <tr className="hover">
      <th>{index + 1}</th>
      <td>
        <div class="flex items-center space-x-3">
          <div class="avatar">
            <div class="w-16 mr-2 rounded-full  ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="Doctors Avatar" />
            </div>
          </div>
          <div className="max-w-sm">
            <div class="font-bold w-full">{name}</div>
          </div>
        </div>
      </td>
      <td>{specialty}</td>
      <td>{email}</td>
      <th>
      <label onClick={()=>{setDeleteModal(info)}} for="deleteModal" class="btn btn-error btn-xs">
      DELETE
      </label>
        
      </th>
    </tr>
  );
};

export default DoctorRow;

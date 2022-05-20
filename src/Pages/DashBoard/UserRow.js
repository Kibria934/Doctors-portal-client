import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch,index }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`https://shrouded-wildwood-70641.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.modifiedCount>0){refetch();
        toast.success("successfully made an admin");
      }else{
        toast.error('You have no right')
      }
      });
  };

  return (
    <tr>
      <th>{index+1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button
            onClick={makeAdmin}
            className="btn btn-accent text-white btn-xs"
          >
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-accent text-white btn-xs">
          Remove User
        </button>
      </td>
    </tr>
  );
};

export default UserRow;

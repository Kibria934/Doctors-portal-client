import { signOut } from "firebase/auth";
import React from "react";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../SharedPage/Loading";
import UserRow from "./UserRow";

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(`http://localhost:5000/users`,{
      method:'GET',
      headers:{
        authorization:`Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then((res) => {
      if(res.status === 401 || res.status === 401){
        signOut(auth)
      }
     return res.json()
    })
  );
  if (isLoading) {
    return <Loading></Loading>;
  }console.log(users);
  
  return (
    <div>
      <h5>All user:{users.length}</h5>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((u,index) => (
              <UserRow user={u} refetch={refetch} key={index}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;

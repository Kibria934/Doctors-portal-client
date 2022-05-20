import React from "react";
import { toast } from "react-toastify";

const DeleteModal = ({deleteModal,refetch,setDeleteModal}) => {
  const{name,email}=deleteModal;
  const handleDelete = (email) => {
    fetch(`https://shrouded-wildwood-70641.herokuapp.com/doctor/${email}`,{
      method:"DELETE",
      headers:{
        authorization:`Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then((res) => res.json()).then(data => {
      if(data.deletedCount){
        toast.success(`Doctor ${name} is deleted `);
        setDeleteModal(null)
        refetch()
      }
    })
  };
  return (
    <div>

      <input type="checkbox" id="deleteModal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are you rally want to delete {name}
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
          <button onClick={()=>handleDelete(email)} class="btn btn-error btn-md">DELETE</button>
            <label for="deleteModal" class="btn  btn-md">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;

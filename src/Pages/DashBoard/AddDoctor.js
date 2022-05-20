import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../SharedPage/Loading";

const AddDoctor = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { data: service, isLoading } = useQuery("service", () =>
    fetch(`https://shrouded-wildwood-70641.herokuapp.com/service`).then((res) => res.json())
  );

  /**
   * ways to stor file /image;
   * 1. Third party storage,(imagebb)/this is public not private; so not in public;
   * 2. Your own storage in server(file system);
   * 3. Database(Mongodb but not in free/it okay in paid);
   *
   * file size validation;
   * YUP: to validate file: search Yup file validation for react hook form;
   */
  // ------------ in imagebb we are now doing------------
  const imageKey = "7de1a05f85591d81c11dd136bb46b8f5";

  if (isLoading) {
    return <Loading />;
  }
  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };
          fetch(`https://shrouded-wildwood-70641.herokuapp.com/doctor`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              console.log("doctor", inserted);
              if (inserted.insertedId) {
                toast.success("Doctor addd successfullys");
                reset()
              }else{
                toast.error("Failed to add doctor")
              }
            });
        }
        console.log("imagebb:", data);
      });
  };
  return (
    <div >
      <div className="flex justify-center ">
        <div className="card w-5/6 lg:max-h-md mt-12 bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="text-2xl font-semibold text-center">
              Add a New Doctor
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/*  ------------------- NAME ------------------- */}
              <div className="form-control w-full mb-0 max-w-2xl">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered w-full max-w-2xl"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              {/* ----------------- EMAIL------------------- */}
              <div className="form-control w-full mb-0 max-w-2xl">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered w-full max-w-2xl"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              {/*  ------------------- SPECIALTY ------------------- */}
              <div className="form-control w-full max-w-2xl">
                <label className="label">
                  <span className="label-text font-semibold">Specialty</span>
                </label>
                <select
                  {...register("specialty", {
                    required: {
                      value: true,
                      message: "Specialty is Required",
                    },
                  })}
                  class="select select-bordered mb-5 w-full max-w-2xl"
                >
                  {service.map((s) => (
                    <option key={s._id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>
              {/*  ------------------- IMAGE UPLOAD ------------------- */}
              <div className="form-control w-full mb-0 max-w-2xl">
                <label className="label">
                  <span className="label-text font-semibold">
                    Upload Doctors image
                  </span>
                </label>
                <input
                  type="file"
                  name="image"
                  className=" p-2 w-full max-w-2xl"
                  {...register("image", {
                    required: {
                      value: true,
                      message: "Image is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.image?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.image.message}
                    </span>
                  )}
                </label>
              </div>
              <input
                className={`btn btn-accent text-white font-normal w-full max-w-2xl`}
                value={"Add New Doctor"}
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;

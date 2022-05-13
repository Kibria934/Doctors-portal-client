import React, { useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../SharedPage/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Signup = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [sendEmailVerification, sending, VerifyError] =
    useSendEmailVerification(auth);

  /* -------------------------- CHEAKING USER -------------------- */
  let signInError;
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user || gUser) {
      console.log("User is:", user);
      navigate(from, { replace: true });
    }
  }, [user, gUser]);

  if (loading || gLoading || updating || sending) {
    return <Loading></Loading>;
  }

  if (error || gError || updateError || VerifyError) {
    signInError = (
      <p className="text-red-500 text-center text-lg mb-1 font-semibold">
        {error?.message ||
          gError?.message ||
          updateError.message ||
          VerifyError.message}
      </p>
    );
  }
  /*  --------------------- HANDLE FORM SUBMIT --------------- */
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    await sendEmailVerification();
  };

  return (
    <div className="flex justify-center  items-center min-h-[90vh] ">
      <div className="card w-96 lg:max-h-md bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-center">Sign Up</h2>

          {/*================ SUBMIT FORM(START) ================*/}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/*  ------------------- NAME ------------------- */}
            <div className="form-control w-full mb-0 max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="Name"
                className="input input-bordered w-full max-w-xs"
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
            <div className="form-control w-full mb-0 max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
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
            {/*  ------------------- PASSWORD------------------- */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Provide minimum 6 character for a valid password",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {signInError}
            <input
              className={`btn btn-accent text-white font-normal w-full max-w-xs`}
              value={"Signup"}
              type="submit"
            />
          </form>
          <p className="text-sm text-center">
            Already have an account?{" "}
            <Link className="text-secondary" to={"/login"}>
              Please Login
            </Link>
          </p>
          {/*================ SUBMIT FORM(END) ================*/}

          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;

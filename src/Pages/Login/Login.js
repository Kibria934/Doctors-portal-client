import React, { useState, useEffect } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../SharedPage/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

const Login = () => {
  /*     ------------------ IMPORTANT INFO(START) -----------------*/
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, resetSending, resetError] =
    useSendPasswordResetEmail(auth);
  const [email, setEmail] = useState("");
  const [token] = useToken(user || gUser);

  /* -------------------------- CHEAKING USER -------------------- */
  let signInError;
  let forgotMessage;
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      console.log(token);
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);
  if (loading || gLoading) {
    return <Loading></Loading>;
  }
  if (error || gError) {
    signInError = (
      <p className=" cursor-pointer text-center text-lg mb-2 ">
        {error?.message || gError?.message}
      </p>
    );
    if (error?.message.includes("auth/wrong-password")) {
      forgotMessage = (
        <p
          onClick={async () => {
            await sendPasswordResetEmail(email);
            alert("Sent email", email);
          }}
          className=" cursor-pointer text-sm mb-2 "
        >
          Forgot Password?
        </p>
      );
    }
    if (error?.code.includes("auth/user-not-found")) {
      signInError = (
        <p className="cursor-pointer text-sm mb-2 ">
          You have no account. Please Signup first.
        </p>
      );
    }

    if (error?.code.includes("auth/wrong-password")) {
      signInError = (
        <p className=" cursor-pointer text-sm mb-2 ">
          You have entered wrong password. Please enter the correct password
        </p>
      );
    }
  }
  /*  --------------------- HANDLE FORM SUBMIT --------------- */
  const onSubmit = (data) => {
    setEmail(data.email);
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="flex justify-center  items-center h-[90vh]">
      <div className="card w-96 bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-center">Login</h2>
          {error && (
            <div class="alert alert-error shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {signInError}
              </div>
            </div>
          )}
          {/*================ SUBMIT FORM(START) ================*/}
          <form onSubmit={handleSubmit(onSubmit)}>
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
              {forgotMessage}
            </div>
            <input
              className={`btn btn-accent text-white font-normal w-full max-w-xs`}
              value={"Login"}
              type="submit"
            />
          </form>
          <p className="text-sm text-center">
            New to Doctors Portal?{" "}
            <Link className="text-secondary" to={"/signup"}>
              Creat new account
            </Link>
          </p>
          {/*================ SUBMIT FORM(END) ================*/}

          <div className="divider">OR</div>
          <button
            onClick={async () => {
              await signInWithGoogle();
            }}
            className="btn btn-outline"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

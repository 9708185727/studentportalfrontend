import React, { useEffect, useState } from "react";
import bgimage from "../../assets/authimage/bgimge.png";
import sideimage from "../../assets/authimage/sideimage.png";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { IoIosEye, IoIosEyeOff, IoLogoLinkedin } from "react-icons/io";
import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../reducer/auth/authAction";
import { toast } from "react-toastify";
import Spinner from "../Sipnner";
import { REGISTER_ROUTE } from "../../constants/route";
import { Link } from "react-router-dom";
const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { error, loading } = useSelector((state) => state.auth);
const [showPassword,setShowPassword]=useState(false)
  const dispatch = useDispatch();
  const submit = (data) => {
    dispatch(loginUser(data));
  };
  useEffect(() => {
    toast(error, {
      type:"error",
    });
  }, [error]);

  return (
    <>
      <div className="flex p-3 shadow-2xl">
        <img
          src={bgimage}
          alt="bgimage"
          className=" h-svh relative w-1/2   opacity-40"
        />
        <form
          onSubmit={handleSubmit(submit)}
          className="absolute top-60 ms-24  flex flex-col  gap-y-3 max-w-1/2 "
        >
          <h2 className="text-2xl font-semibold mt-0 mb-6 text-center">
            Welcome to the Sign Up
          </h2>
          <input
            type="number"
            {...register("phone")}
            className="border outline-none px-3 py-3 rounded-lg w-sm"
            autoComplete="current-phone"
            placeholder="Enter Phone number"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
          <input
            type={showPassword?"text":"password"}
            {...register("password")}
            autoComplete="current-password"
            className="border outline-none px-3 py-3 rounded-lg w-sm"
            placeholder="password"
          />
         <button type="button" className="relative left-80 bottom-11 " onClick={()=>setShowPassword(!showPassword)}> {showPassword?<IoIosEye />:<IoIosEyeOff />}</button>
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
          <h2 className="text-sm text-blue-800">Forgot Password?</h2>
          <button
            type="submit"
            className="bg-blue-500 rounded-lg text-2xl py-2 px-3"
          >
            Sign In
            {loading ? <Spinner className="w-8 ml-3 h-8 inline " /> : null}
          </button>
          <p className="text-center">OR</p>
          <h1 className="text-center text-sm">
            Don't have an Account?{" "}
            <Link to={REGISTER_ROUTE}> <span className="text-blue-800 cursor-pointer">Sign Up</span></Link>

          </h1>
          <div className="flex items-center justify-center gap-x-5 mt-5">
            <FaGoogle className="text-2xl " />
            <FaGithub className="text-2xl" />
            <IoLogoLinkedin className="text-2xl" />
          </div>
        </form>

        <img src={sideimage} alt="bgimage" className="h-full w-1/2" />
      </div>
    </>
  );
};

export default SignIn;

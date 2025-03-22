
import React, { useEffect, useState } from "react";
import bgimage from "../../assets/authimage/bgimge.png";
import sideimage from "../../assets/authimage/sideimage.png";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { IoIosEye, IoIosEyeOff, IoLogoLinkedin } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../reducer/auth/authAction";
import { toast } from "react-toastify";
import Spinner from ".././Sipnner";
import { LOGIN_ROUTE } from "../../constants/route";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { error, loading } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();
  
  const submit = (data) => {
    dispatch(registerUser(data));
    toast("Successfully register",{
      type:"success"
    })
    reset();
  };

  useEffect(() => {
    if (error) {
      toast(error, { type: "error" });
    }
  }, [error]);

  return (
    <div className="flex p-3 shadow-2xl py-36 ">
      <img src={bgimage} alt="bgimage" className="w-1/2 h-2 opacity-40" />
      <form onSubmit={handleSubmit(submit)} className="absolute top-36 ms-24 flex flex-col gap-y-3 max-w-1/2">
        <h2 className="text-2xl font-semibold mt-0 mb-6 text-center">Create Your Account</h2>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          className="border outline-none px-3 py-3 rounded-lg w-sm"
          placeholder="Full Name"
        />
        <p className="text-red-500 text-sm">{errors.name?.message}</p>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className="border outline-none px-3 py-3 rounded-lg w-sm"
          autoComplete="email"
          placeholder="Enter your email"
        />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>
        <input
          type="tel"
          {...register("phone", { required: "Phone number is required" })}
          className="border outline-none px-3 py-3 rounded-lg w-sm"
          placeholder="Phone Number"
        />
        <p className="text-red-500 text-sm">{errors.phone?.message}</p>
        <input
          type="text"
          {...register("batch", { required: "Batch is required" })}
          className="border outline-none px-3 py-3 rounded-lg w-sm"
          placeholder="enter batch"
        />
        <p className="text-red-500 text-sm">{errors.batch?.message}</p>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", { required: "Password is required" })}
            autoComplete="new-password"
            className="border outline-none px-3 py-3 rounded-lg w-sm pr-10"
            placeholder="Password"
          />
          <button type="button" className="absolute right-3 top-3" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
          </button>
        </div>
        <p className="text-red-500 text-sm">{errors.password?.message}</p>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            {...register("confirmPassword", { required: "Confirm your password" })}
            autoComplete="new-password"
            className="border outline-none px-3 py-3 rounded-lg w-sm pr-10"
            placeholder="Confirm Password"
          />
          <button type="button" className="absolute right-3 top-3" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? <IoIosEye /> : <IoIosEyeOff />}
          </button>
        </div>
        <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>
        <button type="submit" className="bg-blue-500 rounded-lg text-2xl py-2 px-3">
          Sign Up {loading && <Spinner className="w-8 ml-3 h-8 inline" />}
        </button>
        <p className="text-center">OR</p>
        <h1 className="text-center text-sm">
          Already have an Account? <Link to={LOGIN_ROUTE}> <span className="text-blue-800 cursor-pointer">Sign In</span></Link>
        </h1>
        <div className="flex items-center justify-center gap-x-5 mt-5">
          <FaGoogle className="text-2xl cursor-pointer" />
          <FaGithub className="text-2xl cursor-pointer" />
          <IoLogoLinkedin className="text-2xl cursor-pointer" />
        </div>
      </form>
      <img src={sideimage} alt="sideimage" className="h-full w-1/2" />
    </div>
  );
};

export default SignUp;



import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const submitHandler = async (data) => {

    try {

      const res = await axios.post("http://localhost:3000/user/login", data);

      console.log("response..", res);

      if (res.status === 200) {

        toast.success("Login Success");

        const role = res.data.role;

        if (role === "admin") {
          navigate("/admin");
        }
        else if (role === "buyer") {
          navigate("/buyer");
        }
        else if (role === "owner") {
          navigate("/owner");
        }
        else if (role === "agent") {
          navigate("/agent");
        }
        else {
          toast.error("Invalid Role");
          navigate("/");
        }

      }

    } catch (err) {
      toast.error(err.response?.data?.message || "Login Failed");
    }

  };

  return (
    <div className="min-h-screen relative flex items-center justify-center">

      {/* BACKGROUND IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        alt="real estate"
        className="absolute w-full h-full object-cover"
      />

      {/* LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* GLASS FORM */}
      <div className="relative z-10 w-full max-w-md p-8 rounded-2xl 
        bg-white/20 backdrop-blur-md shadow-2xl border border-white/30">

        <h2 className="text-3xl font-bold mb-2 text-white text-center">
          Welcome Back 👋
        </h2>
        <p className="text-gray-200 mb-6 text-center">
          Please login to continue
        </p>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">

          {/* EMAIL */}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-gray-200 border border-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("email", {
                required: "Email is required"
              })}
            />

            {errors.email && (
              <p className="text-red-300 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-gray-200 border border-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters"
                }
              })}
            />

            {errors.password && (
              <p className="text-red-300 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
}
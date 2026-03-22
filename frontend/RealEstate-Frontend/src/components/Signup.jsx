import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Signup() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const navigate = useNavigate();

  const submitHandler = async (data) => {

    data.role = "buyer";

    try {
      const res = await axios.post("http://localhost:3000/user/register", data);

      if (res.status === 201) {
        toast.success("User registered successfully");
        navigate("/");
      }

    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
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

      {/* FORM CONTAINER */}
      <div className="relative z-10 w-full max-w-md p-8 rounded-2xl 
        bg-white/20 backdrop-blur-md shadow-2xl border border-white/30">

        <h2 className="text-3xl font-bold mb-2 text-white text-center">
          Create Account 🚀
        </h2>
        <p className="text-gray-200 mb-6 text-center">
          Signup to get started
        </p>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">

          {/* FIRST NAME */}
          <div>
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-gray-200 border border-white/40"
              {...register("firstName", { required: "First Name required" })}
            />
            {errors.firstName && (
              <p className="text-red-300 text-sm">{errors.firstName.message}</p>
            )}
          </div>

          {/* LAST NAME */}
          <div>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-gray-200 border border-white/40"
              {...register("lastName", { required: "Last Name required" })}
            />
            {errors.lastName && (
              <p className="text-red-300 text-sm">{errors.lastName.message}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-gray-200 border border-white/40"
              {...register("email", { required: "Email required" })}
            />
            {errors.email && (
              <p className="text-red-300 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-gray-200 border border-white/40"
              {...register("password", {
                required: "Password required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters"
                }
              })}
            />
            {errors.password && (
              <p className="text-red-300 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* GENDER */}
          <div>
            <select
              className="w-full p-3 rounded-lg bg-white/30 text-white border border-white/40"
              {...register("gender", { required: "Gender required" })}
            >
              <option value="" className="text-black">Select Gender</option>
              <option value="male" className="text-black">Male</option>
              <option value="female" className="text-black">Female</option>
            </select>

            {errors.gender && (
              <p className="text-red-300 text-sm">{errors.gender.message}</p>
            )}
          </div>

          {/* ADDRESS */}
          <div>
            <input
              type="text"
              placeholder="Address"
              className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-gray-200 border border-white/40"
              {...register("address", { required: "Address required" })}
            />
            {errors.address && (
              <p className="text-red-300 text-sm">{errors.address.message}</p>
            )}
          </div>

          {/* CITY */}
          <div>
            <input
              type="text"
              placeholder="City"
              className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-gray-200 border border-white/40"
              {...register("city", { required: "City required" })}
            />
            {errors.city && (
              <p className="text-red-300 text-sm">{errors.city.message}</p>
            )}
          </div>

          {/* STATE */}
          <div>
            <input
              type="text"
              placeholder="State"
              className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-gray-200 border border-white/40"
              {...register("state", { required: "State required" })}
            />
            {errors.state && (
              <p className="text-red-300 text-sm">{errors.state.message}</p>
            )}
          </div>

          {/* PINCODE */}
          <div>
            <input
              type="number"
              placeholder="Pincode"
              className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-gray-200 border border-white/40"
              {...register("pincode", { required: "Pincode required" })}
            />
            {errors.pincode && (
              <p className="text-red-300 text-sm">{errors.pincode.message}</p>
            )}
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Signup
          </button>

        </form>

      </div>
    </div>
  );
}
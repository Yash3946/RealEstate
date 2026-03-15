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

    // role automatically buyer set
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
    <div className="min-h-screen flex">

      {/* LEFT IMAGE */}
      <div className="hidden md:flex w-1/2 h-screen">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="office"
          className="object-cover w-full h-full"
        />
      </div>

      {/* FORM */}
      <div className="flex items-center justify-center w-full md:w-1/2 px-6">

        <div className="w-full max-w-md">

          <h2 className="text-3xl font-bold mb-2">Create Account 🚀</h2>
          <p className="text-gray-500 mb-6">Signup to get started</p>

          <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">

            {/* FIRST NAME */}
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border rounded-lg"
                {...register("firstName", { required: "First Name required" })}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName.message}</p>
              )}
            </div>

            {/* LAST NAME */}
            <div>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border rounded-lg"
                {...register("lastName", { required: "Last Name required" })}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName.message}</p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg"
                {...register("email", { required: "Email required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border rounded-lg"
                {...register("password", {
                  required: "Password required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters"
                  }
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>

            {/* GENDER */}
            <div>
              <select
                className="w-full p-3 border rounded-lg"
                {...register("gender", { required: "Gender required" })}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>

              {errors.gender && (
                <p className="text-red-500 text-sm">{errors.gender.message}</p>
              )}
            </div>

            {/* ADDRESS */}
            <div>
              <input
                type="text"
                placeholder="Address"
                className="w-full p-3 border rounded-lg"
                {...register("address", { required: "Address required" })}
              />
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address.message}</p>
              )}
            </div>

            {/* CITY */}
            <div>
              <input
                type="text"
                placeholder="City"
                className="w-full p-3 border rounded-lg"
                {...register("city", { required: "City required" })}
              />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city.message}</p>
              )}
            </div>

            {/* STATE */}
            <div>
              <input
                type="text"
                placeholder="State"
                className="w-full p-3 border rounded-lg"
                {...register("state", { required: "State required" })}
              />
              {errors.state && (
                <p className="text-red-500 text-sm">{errors.state.message}</p>
              )}
            </div>

            {/* PINCODE */}
            <div>
              <input
                type="number"
                placeholder="Pincode"
                className="w-full p-3 border rounded-lg"
                {...register("pincode", { required: "Pincode required" })}
              />
              {errors.pincode && (
                <p className="text-red-500 text-sm">{errors.pincode.message}</p>
              )}
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
            >
              Signup
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}
import React, { useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    password: "",
    role: "user",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const primaryColor = "#ff4d2d";
  const borderColor = "#ddd";
  const bgColor = "#fff9f6";

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle role selection
  const handleRoleChange = (r) => {
    setFormData({ ...formData, role: r });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/signup",
        formData
      );
      console.log(res);
      // alert(res.data.message);
      Swal.fire({
        title: "Success!",
        text: res.data.message,
        icon: "success",
        confirmButtonColor: "#ff4d2d",
      });
      navigate("/signin");
    } catch (err) {
      // alert(err.response?.data?.message || "Something went wrong");
      Swal.fire({
        title: "Failed!",
        text: err.response?.data?.message || "Something went wrong",
        icon: "error",
        confirmButtonColor: "#ff4d2d",
      });
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 w-full"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 border"
        style={{ borderColor: borderColor }}
      >
        <h1 className="text-3xl font-bold mb-2" style={{ color: primaryColor }}>
          Signup
        </h1>
        <p className="text-gray-600 mb-8">
          Create your account to get started with delicious food deliverys
        </p>

        {/* Full Name */}
        <div className="mb-4">
          <label
            htmlFor="fullname"
            className="block text-gray-700 font-medium mb-1"
          >
            Name
          </label>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="w-full border rounded-lg px-2 py-2 focus:outline-none focus:border-orange-500"
            placeholder="Enter your Full Name"
            style={{ border: `1px solid ${borderColor}` }}
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-1"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-2 py-2 focus:outline-none focus:border-orange-500"
            placeholder="Enter your Email"
            style={{ border: `1px solid ${borderColor}` }}
          />
        </div>

        {/* Mobile */}
        <div className="mb-4">
          <label
            htmlFor="mobile"
            className="block text-gray-700 font-medium mb-1"
          >
            Mobile
          </label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full border rounded-lg px-2 py-2 focus:outline-none focus:border-orange-500"
            placeholder="Enter your Mobile no"
            style={{ border: `1px solid ${borderColor}` }}
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-1"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-lg px-2 py-2 pr-10 focus:outline-none focus:border-orange-500"
              placeholder="Enter your Password"
              style={{ border: `1px solid ${borderColor}` }}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-2.5 text-gray-500"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Role */}
        <div className="mb-4">
          <label
            htmlFor="role"
            className="block text-gray-700 font-medium mb-1"
          >
            Role
          </label>
          <div className="flex gap-3">
            {["user", "owner", "deliveryBoy"].map((r) => (
              <button
                key={r}
                onClick={() => handleRoleChange(r)}
                className="flex-1 border rounded-lg px-3 py-2 text-center font-medium transition-colors cursor-pointer"
                style={
                  formData.role === r
                    ? {
                        backgroundColor: primaryColor,
                        color: "#fff",
                        border: `1px solid ${primaryColor}`,
                      }
                    : {
                        backgroundColor: "transparent",
                        color: "#333",
                        border: `1px solid ${borderColor}`,
                      }
                }
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="flex items-center justify-center w-full mt-4 gap-2 border rounded-lg px-4 py-2 transition duration-300 text-white cursor-pointer bg-[#ff4d2d]"
        >
          Signup
        </button>

        {/* Google Signup */}
        <button className="mt-4 font-medium text-base border rounded-lg w-full cursor-pointer flex items-center justify-center px-4 py-2 hover:bg-gray-100 duration-300 ease-in-out">
          <FcGoogle />
          <span className="pl-2">Sign Up with Google</span>
        </button>

        {/* Signin Link */}
        <p className="pt-3 text-center text-base font-normal">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-orange-500 font-medium hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

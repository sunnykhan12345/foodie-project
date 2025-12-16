import React, { useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const primaryColor = "#ff4d2d";
  const borderColor = "#ddd";
  const bgColor = "#fff9f6";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/signin",
        formData,
        { withCredentials: true } // Important if backend sends cookies
      );
      console.log(res.data);
      // alert(res.data.message);
      Swal.fire({
        title: "Success!",
        text: res.data.message,
        icon: "success",
        confirmButtonColor: "#ff4d2d",
      });
      // After successful login, navigate to dashboard or homepage
      navigate("/");
    } catch (err) {
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
          Signin
        </h1>
        <p className="text-gray-600 mb-8">
          Sign in to your account to continue
        </p>

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
        <div
          className="text-right mb-4 font-medium cursor-pointer"
          style={{ color: primaryColor }}
          onClick={() => navigate("/forget-password")}
        >
          forget password
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="flex items-center justify-center w-full mt-4 gap-2 border rounded-lg px-4 py-2 transition duration-300 text-white cursor-pointer bg-[#ff4d2d]"
        >
          Sign In
        </button>

        {/* Google Signin */}
        <button className="mt-4 font-medium text-base border rounded-lg w-full cursor-pointer flex items-center justify-center px-4 py-2 hover:bg-gray-100 duration-300 ease-in-out">
          <FcGoogle />
          <span className="pl-2">Sign in with Google</span>
        </button>

        {/* Signup Link */}
        <p className="pt-3 text-center text-base font-normal">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-orange-500 font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;

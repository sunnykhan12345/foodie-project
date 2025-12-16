import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";

const ForgetPassword = () => {
  const [stp, setStep] = useState(1);

  //
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  // for pass
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const primaryColor = "#ff4d2d";
  const borderColor = "#ddd";
  const bgColor = "#fff9f6";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/forget-password",
        { email }
      );

      Swal.fire({
        title: "Email Sent!",
        text: res.data.message || "Password reset link sent to your email",
        icon: "success",
        confirmButtonColor: primaryColor,
      });
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: err.response?.data?.message || "Something went wrong",
        icon: "error",
        confirmButtonColor: primaryColor,
      });
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 w-full"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 border relative"
        style={{ borderColor }}
      >
        <button
          onClick={() => navigate("/signin")}
          className="absolute left-5 top-10 text-gray-600 hover:text-orange-500 transition"
        >
          <FaArrowLeft size={18} className="text-orange-500 " />
        </button>

        <h1
          className="text-2xl font-bold mb-2 text-center"
          style={{ color: primaryColor }}
        >
          Forgot Password
        </h1>
        {stp === 1 && (
          <div className="mt-5">
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full border rounded-lg px-2 py-2 focus:outline-none focus:border-orange-500"
                style={{ border: `1px solid ${borderColor}` }}
              />
            </div>
            <button
              onClick={handleSubmit}
              className="cursor-pointer w-full py-2 rounded-lg text-white font-medium transition bg-[#ff4d2d]"
            >
              Send Otp
            </button>
          </div>
        )}
        {stp === 2 && (
          <div className="mt-5">
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-1">
                OTP
              </label>
              <input
                type="email"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full border rounded-lg px-2 py-2 focus:outline-none focus:border-orange-500"
                style={{ border: `1px solid ${borderColor}` }}
              />
            </div>
            <button
              onClick={handleSubmit}
              className="cursor-pointer w-full py-2 rounded-lg text-white font-medium transition bg-[#ff4d2d]"
            >
              Verify
            </button>
          </div>
        )}
        {stp === 3 && (
          <div className="mt-5">
            {/* New Password */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="w-full border rounded-lg px-3 py-2 pr-10 focus:outline-none focus:border-orange-500"
                  style={{ border: `1px solid ${borderColor}` }}
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-2.5 text-gray-500"
                >
                  {showNewPassword ? <FaRegEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm password"
                  className="w-full border rounded-lg px-3 py-2 pr-10 focus:outline-none focus:border-orange-500"
                  style={{ border: `1px solid ${borderColor}` }}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-2.5 text-gray-500"
                >
                  {showConfirmPassword ? <FaRegEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button className="cursor-pointer w-full py-2 rounded-lg text-white font-medium transition bg-[#ff4d2d] hover:bg-orange-600">
              Reset Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;

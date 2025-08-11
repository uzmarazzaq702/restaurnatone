import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ForgotPassword = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailOrUsername) {
      alert(`A password reset link has been sent to: ${emailOrUsername}`);
      setEmailOrUsername("");
    } else {
      alert("Please enter your username or email.");
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-50 flex items-center justify-center px-4"
      data-aos="fade-up"
    >
      <div
        className="w-full max-w-2xl bg-white border border-gray-200 p-6 sm:p-8 shadow-sm rounded-md"
        data-aos="zoom-in"
      >
        <p className="text-sm text-gray-700 mb-6" data-aos="fade-right">
          <span className="font-medium">Lost your password?</span> Please enter your
          username or email address. You will receive a link to create a new password via
          email.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div data-aos="fade-left">
            <label className="block text-sm text-gray-700 mb-2">
              Username or email <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="emailOrUsername"
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md"
            data-aos="fade-up"
          >
            Reset password
          </button>

          <div className="mt-4" data-aos="fade-up">
            <Link
              to="/myaccount"
              className="text-pink-600 hover:underline text-sm"
            >
              ← Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

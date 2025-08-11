import React, { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.username === "admin" && formData.password === "123") {
      alert("Login successful!");
      navigate("/myaccount");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-50 flex items-center justify-center px-0"
      data-aos="fade-up"
    >
      <div className="w-full pt-20" data-aos="fade-down">
        <div
          className="bg-white rounded-none border border-gray-200 p-6 sm:p-8 shadow-sm w-full"
          data-aos="zoom-in"
        >
          <h1
            className="text-2xl font-bold text-gray-800 mb-8 px-4"
            data-aos="fade-right"
          >
            Login
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6 px-4">
            <div data-aos="fade-left">
              <label className="block text-[18px] text-gray-700 mb-2">
                Username or email address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            <div data-aos="fade-left">
              <label className="block text-sm text-gray-700 mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div
              className="flex items-center justify-between"
              data-aos="fade-up"
            >
              <label className="flex items-center text-[18px] text-gray-700">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="px-16 py-4 bg-[#f30161] hover:bg-pink-600 text-white rounded-md"
              data-aos="fade-up"
            >
              Log in
            </button>

            <div className="text-[18px] text-pink-600 hover:underline mt-2" data-aos="fade-up">
              <Link
                to="/myaccount/forgot-password"
                className="text-[18px] text-pink-600 hover:underline mt-2 block"
              >
                Lost your password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BiIdCard } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Spinner from "../Components/Spinner";

const StudentLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1500);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1622405631947-baffbfc4b48e?q=80&w=687&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-cyan-700 mb-8">
          Student Login
        </h1>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <MdEmail className="h-5 w-5 absolute left-3 top-2.5 text-gray-600" />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                className="w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-2.5 text-gray-600"
              >
                {showPassword ? (
                  <AiFillEye className="h-5 w-5" />
                ) : (
                  <AiFillEyeInvisible className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div>
            <label
              htmlFor="studentId"
              className="block text-gray-700 font-medium mb-2"
            >
              Student ID
            </label>
            <div className="relative">
              <input
                type="text"
                id="studentId"
                name="studentId"
                placeholder="Enter your student ID"
                required
                className="w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <BiIdCard className="h-5 w-5 absolute left-3 top-2.5 text-gray-600" />
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center">
            <button
              type="submit"
              disabled={loading}
              onClick={() => alert("Login Successful")}
              className={`w-full flex items-center justify-center bg-cyan-600 text-white font-semibold py-2 rounded-lg shadow-md transition duration-300 ${
                loading
                  ? "opacity-80 cursor-not-allowed"
                  : "hover:bg-cyan-700 active:scale-95"
              }`}
            >
              {loading ? (
                <>
                  Logging in
                  <Spinner />
                </>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-cyan-600 font-medium hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default StudentLogin;

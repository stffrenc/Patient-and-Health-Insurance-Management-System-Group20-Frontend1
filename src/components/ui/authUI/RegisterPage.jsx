import React, { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-md w-full bg-white p-8 border border-gray-300 rounded-lg">
        <div className="mb-6 text-center">
          <div className="flex justify-center">
            <span className="text-[#747264] text-4xl">⚕</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 my-4">
            Signup to create an account
          </h2>
          <p className="text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-[#747264] hover:underline">
              Login
            </a>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={formData.username}
            className="w-full p-4 border rounded-lg bg-gray-50 border-gray-300 focus:ring-[#747264] focus:border-[#747264]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            onChange={handleChange}
            value={formData.email}
            className="w-full p-4 border rounded-lg bg-gray-50 border-gray-300 focus:ring-[#747264] focus:border-[#747264]"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
            className="w-full p-4 border rounded-lg bg-gray-50 border-gray-300 focus:ring-[#747264] focus:border-[#747264]"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={formData.confirmPassword}
            className="w-full p-4 border rounded-lg bg-gray-50 border-gray-300 focus:ring-[#747264] focus:border-[#747264]"
            required
          />
          <button
            type="submit"
            className="w-full p-4 bg-[#747264] text-white rounded-lg hover:bg-[#3C3633]"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;

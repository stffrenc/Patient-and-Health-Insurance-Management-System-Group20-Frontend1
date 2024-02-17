// src/components/Auth/LoginPage.js
import React from 'react';
import { useForm } from 'react-hook-form';
import './LoginPage.css'; // Import the custom CSS

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    // Placeholder for authentication logic
  };
  return (
    <div className="login-container">
      <div className="login-form-container">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" {...register("email", { required: true })} />
            {errors.email && <span className="error">Email is required</span>}
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" {...register("password", { required: true })} />
            {errors.password && <span className="error">Password is required</span>}
          </div>
          <button type="submit" className="submit-button">Login</button>
          <p className="forgot-password">Forgot your password?</p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

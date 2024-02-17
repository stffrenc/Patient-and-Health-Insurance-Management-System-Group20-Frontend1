// src/components/Auth/RegisterPage.js
import React from 'react';
import { useForm } from 'react-hook-form';
import './RegisterPage.css'; // Import the custom CSS

function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    // Placeholder for registration logic
  };

  const password = watch("password");
  
  return (
    <div className="register-container">
      <div className="register-form-container">
        <h2 className="register-title">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="register-form">
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" {...register("username", { required: true })} />
            {errors.username && <span className="error">Username is required</span>}
          </div>
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
          <div className="form-control">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              {...register("confirmPassword", {
                validate: value => value === password || "The passwords do not match",
              })}
            />
            {errors.confirmPassword && <span className="error">{errors.confirmPassword.message}</span>}
          </div>
          <button type="submit" className="submit-button">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;

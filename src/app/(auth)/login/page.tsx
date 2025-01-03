"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import React from "react";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Registration: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center  items-center min-h-screen px-4 sm:px-8 lg:px-0">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
        <div className="text-zinc-300 space-y-[2px]">
          <h1 className="text-2xl font-bold">Please Login Your Account</h1>
          <p className="text-sm">
            Please fill out the form below to Login your account.
          </p>
        </div>

        <div className="space-y-4 mt-4">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className={`block font-medium mb-2 ${
                errors.email ? "text-red-500" : "text-zinc-300"
              }`}
            >
              Email
            </label>
            <input
              id="email"
              type="text"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Please enter a valid email address",
                },
              })}
              className={`bg-transparent w-full px-4 py-2 border ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-700 focus:ring-blue-400"
              } rounded-sm focus:outline-none focus:ring-2 transition duration-300`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 animate-pulse">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className={`block  font-medium mb-2 ${
                errors.password ? "text-red-500" : "text-zinc-300"
              }`}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              className={`bg-transparent w-full px-4 py-2 border ${
                errors.password
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-700 focus:ring-blue-400"
              } rounded-sm focus:outline-none focus:ring-2 transition duration-300`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1 animate-pulse">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="flex items-center space-x-2">
            <Link
              href="/forgot-password"
              className="text-green-400 text-sm underline"
            >
              Forgot Password
            </Link>
          </div>

          {/* Sign Up Link */}
          <div className="flex sm:justify-end gap-1">
            <span className="text-zinc-300 text-sm ">Not Create Account?</span>
            <Link
              href="/signup"
              className="text-green-400 text-sm hover:underline"
            >
              Sign Up
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-600 text-gray-200 py-2 px-6 text-sm rounded-md w-full sm:w-auto"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;

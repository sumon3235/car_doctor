"use client";

import Link from "next/link";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const registrationData = { name, email, password };

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registrationData),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message);
      return;
    }

    alert(data.message);
    form.reset();
  };

  return (
    <section className="w-full rounded-2xl bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-10">
      {/* Collect the user's registration details. */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Create your account
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Fill in your details to get started.
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            autoComplete="name"
            required
            className="input w-full border-slate-200 bg-slate-50 px-4 text-slate-900 outline-none transition focus:border-red-400 focus:bg-white"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            required
            className="input w-full border-slate-200 bg-slate-50 px-4 text-slate-900 outline-none transition focus:border-red-400 focus:bg-white"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              autoComplete="new-password"
              required
              className="input w-full border-slate-200 bg-slate-50 px-4 pr-12 text-slate-900 outline-none transition focus:border-red-400 focus:bg-white"
            />
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-red-500"
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="btn w-full border-0 bg-red-500 text-base font-semibold text-white transition hover:bg-red-600"
        >
          Create account
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-red-500 hover:text-red-600"
        >
          Login
        </Link>
      </p>
    </section>
  );
};

export default RegisterForm;

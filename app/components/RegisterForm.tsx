"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface RegisterInputs {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
}

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState<boolean>();
  
  const router = useRouter();
  async function onSubmit(data: RegisterInputs) {
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      });
    }
    catch (error) {
      console.error("Error creating the user" + error);
    }

    router.push("/login");
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>();

  const styleFName = `input input-bordered w-full ${
    errors.first_name ? "input-error" : ""
  }`;
  const styleLName = `input input-bordered w-full ${
    errors.last_name ? "input:error" : ""
  }`;
  const styleUsername = `input input-bordered flex items-center gap-2 ${
    errors.username ? "input-error" : ""
  }`;
  const styleEmail = `input input-bordered flex items-center gap-2 ${
    errors.email ? "input-error" : ""
  }`;

  return (
    // <span className="loading loading-spinner text-success"></span>
    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
          <div className="label">
            <span className="label-text-alt">
              First Name <span className="text-error">*</span>
            </span>
          </div>
          <input
            type="text"
            placeholder="Man"
            className={styleFName}
            {...register("first_name", {
              required: true,
              pattern: /^[a-zA-Z]{1,50}$/,
            })}
          />
        {errors.first_name && (
          <span className={"label-text-alt text-error py-1"}>
            First name must only contain alphabet (a-z)
          </span>
        )}
      </div>
      <div className="form-control">
        <label className="form-control">
          <div className="label">
            <span className="label-text-alt">Last Name</span>
          </div>
          <input
            type="text"
            placeholder="Human"
            className={styleLName}
            {...register("last_name", {
              required: false,
              pattern: /^[a-zA-Z]{1,50}$/,
            })}
          />
        </label>
        {errors.last_name && (
          <span className="label-text-alt text-error py-1">
            Last name must only contain alphabet (a-z)
          </span>
        )}
      </div>
      <span className="label-text-alt">
        Username <span className="text-error">*</span>
      </span>
      <div className="form-control">
        <label className={styleUsername}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Username"
            {...register("username", {
              required: true,
              pattern: /^[a-zA-Z0-9_.-]{3,20}$/,
            })}
          />
        </label>
        {errors.username && (
          <span className="label-text-alt text-error py-1">
            Username must be between 3 to 20 characters long
          </span>
        )}
      </div>
      <span className="label-text-alt">
        Email <span className="text-error">*</span>
      </span>
      <div className="form-control">
        <label className={styleEmail}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="man@example.edu"
            {...register("email", {
              required: true,
              pattern: /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.edu)$/,
            })}
          />
        </label>
        {errors.email && (
          <span className="label-text-alt text-error py-1">
            Email must be a .edu email
          </span>
        )}
      </div>
      <span className="label-text-alt">
        Password <span className="text-error">*</span>
      </span>
      <div className="form-control">
        <label className="input input-bordered flex items-center gap-2 focus:input-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="********"
            {...register("password", {
              required: true,
            })}
          />
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </div>
      <Link
        className="form-control link link-hover hover:link-info"
        href="/login"
      >
        Already have an account? Click here to sign in!
      </Link>
    </form>
  );
}

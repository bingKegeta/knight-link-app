"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import LoginErrorAlert from "./LoginErrorAlert";

interface LoginProps {
  username: string;
  password: string;
}

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();

  async function onSubmit(data: LoginProps) {
    console.log(data);
    // const res = await fetch("/api/auth", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // });

    // console.log(res.json());

    // if (!res.ok) {
    //   return <LoginErrorAlert />;
    // } else {
    //   console.log(res.json());
    // }
  }

  return (
    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label className="input input-bordered flex items-center gap-2 focus:input-secondary">
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
            })}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="input input-bordered flex items-center gap-2 focus:input-secondary">
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
            placeholder="password"
            {...register("password", {
              required: true,
            })}
          />
        </label>
        <label className="label">
          <Link href="/" className="label-text-alt link link-hover">
            Forgot password?
          </Link>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Login</button>
      </div>
      <Link href="/register" className="form-control">
        Don&apos;t have an account yet? Click here to sign up!
      </Link>
    </form>
  );
}

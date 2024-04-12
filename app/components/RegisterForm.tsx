"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FieldErrors, UseFormRegister, useForm } from "react-hook-form";
import { useFormState, useFormStatus } from "react-dom";
import { RegisterUser, State } from "./server/actions";
import CloseBtn from "./CloseButton";

interface RegisterInputs {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
}

// test array, use a function in server actions to get the array of unis to list here
const unis: string[] = [
  "Man University",
  "Woman University",
  "Child Univerisity",
  "University of Central Florida",
];

export function RegisterFormContent({
  register,
  isValid,
  errors,
}: {
  register: UseFormRegister<RegisterInputs>;
  isValid: boolean;
  errors: FieldErrors<RegisterInputs>;
}) {
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

  const { pending } = useFormStatus();

  return (
    <div className="">
      <span
        className={`loading loading-spinner text-success w-16 fixed top-2/4 left-2/4 -translate-x-1/2 
                        ${
                          pending
                            ? "opacity-100"
                            : "opacity-0 backdrop-blur-sm transition-opacity"
                        }`}
      ></span>

      <div
        className={`md:p-8 lg:card-normal p-4
                        card-compact bg-base-100 border-2 border-primary
                        ${
                          pending
                            ? "opacity-0"
                            : "opacity-100 backdrop-blur-sm transition-opacity"
                        }
                        `}
      >
        <CloseBtn />
        <div className="card-body">
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
          <div className="form-control">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text-alt">
                  University <span className="text-error">*</span>
                </span>
              </div>
              <select className="select select-bordered">
                <option disabled selected>
                  Pick one
                </option>
                {unis.map((uni) => (
                  <option key={uni}>{uni}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="form-control mt-6">
            <button
              className="btn btn-primary"
              type="submit"
              disabled={pending || !isValid}
            >
              Login
            </button>
          </div>
          <Link
            className="form-control link link-hover hover:link-info"
            href="/login"
          >
            Already have an account? Click here to sign in!
          </Link>
        </div>
      </div>
    </div>
  );
}

function alertCreation(state: State) {
  let alertComponent = null;

  if (state?.status === "success") {
    alertComponent = (
      <div role="alert" className="alert alert-success">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{state?.message || "User created!"}</span>
      </div>
    );
  } else if (state?.status === "warning") {
    alertComponent = (
      <div role="alert" className="alert alert-warning">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span>
          {state?.message || "Warning: There was an unexpected error!"}
        </span>
      </div>
    );
  } else if (state?.status === "error") {
    alertComponent = (
      <div role="alert" className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{state?.message || "Error! Task failed."}</span>
      </div>
    );
  }

  return alertComponent;
}

export default function RegisterForm() {
  const {
    register,
    formState: { isValid, errors },
  } = useForm<RegisterInputs>();

  const [state, formAction] = useFormState<State, FormData>(RegisterUser, null);
  const [alert, setAlert] = useState<{
    visible: boolean;
    content: React.JSX.Element | null;
  }>({ visible: false, content: null });

  useEffect(() => {
    if (state) {
      setAlert({ visible: true, content: alertCreation(state) });

      const fadeOutTimer = setTimeout(() => {
        setAlert((prevState) => ({ ...prevState, visible: false }));
      }, 5000);

      const removeTimer = setTimeout(() => {
        setAlert({ visible: false, content: null });
      }, 6000);

      return () => {
        clearTimeout(fadeOutTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [state]);

  return (
    <div>
      <form action={formAction}>
        <RegisterFormContent
          register={register}
          isValid={isValid}
          errors={errors}
        />
      </form>
      <div
        className={`transition-opacity duration-200 fixed bottom-0 right-0 m-4 ${
          alert.visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {alert.content}
      </div>
    </div>
  );
}

'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FieldErrors, UseFormRegister, useForm } from "react-hook-form";
import { useFormState, useFormStatus } from "react-dom";
import { LoginUser, State } from "./server/actions";
import CloseBtn from "./CloseButton";
import alertCreation from "./AlertCreation";
import { useRouter } from "next/navigation";

interface LoginInputs {
  username: string;
  password: string;
}

export function LoginFormContent({
  register,
  isValid,
  errors,
}: {
  register: UseFormRegister<LoginInputs>;
  isValid: boolean;
  errors: FieldErrors<LoginInputs>;
}) {
  
  const { pending } = useFormStatus();

    return (
      <>
        <span className={`loading loading-spinner text-success w-16 fixed top-2/4 left-2/4 -translate-x-1/2 
                          ${pending ? "opacity-100" : "opacity-0 backdrop-blur-sm transition-opacity"}`}></span>

        <div className={`md:p-8 lg:card-normal p-4
                          card bg-base-100 border-2 border-primary
                          ${pending ? "opacity-0" : "opacity-100 backdrop-blur-sm transition-opacity"}
                          `}>
          <CloseBtn />
          <div className="card-body">
              {/* Username field */}
              <div className="form-control">
                <label className="input input-bordered flex items-center gap-2 focus:input-secondary">
                  {/* Username svg icon */}
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
                  placeholder="Username"
                  className={`grow`}
                  {...register("username", { required: "Username is required" })}
                />
                </label>

                {errors.username && (
                  <span className="label-text-alt text-error">{errors.username.message}</span>
                )}
              </div>

              {/* Password field */}
              <div className="form-control">
              <label className="input input-bordered flex items-center gap-2 focus:input-secondary">
                {/* Password svg */}
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
                      placeholder="Password"
                      className={`grow`}
                      {...register("password", { required: "Password is required" })}
                    />
                </label>
                
                {errors.password && (
                  <span className="label-text-alt text-error">{errors.password.message}</span>
                )}
              </div>

              {/* Forgot Password Link */}
              <div className="form-control">
                <Link href="/" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </div>

              {/* Submit button */}
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>

            {/* Sign Up Link */}
            <div className="form-control">
              <Link href="/register" className="link link-hover">
                Don't have an account yet? Click here to sign up!
              </Link>
            </div>
          </div>
        </div>
      </>
    );
}


export default function LoginForm() {
  const {
    register,
    formState: { isValid, errors },
  } = useForm<LoginInputs>();

  const [state, formAction] = useFormState<State, FormData>(LoginUser, null);
  const [alert, setAlert] = useState<{ visible: boolean, content: React.JSX.Element | null }>({ visible: false, content: null });
  const router = useRouter();

  useEffect(() => {
    if (state) {
      if (state.status === "success") {
        router.push("/home");
      }

      setAlert({ visible: true, content: alertCreation(state) });
      
      const fadeOutTimer = setTimeout(() => {
        setAlert(prevState => ({ ...prevState, visible: false }));
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
      <form action={formAction} >
        <LoginFormContent register={register} isValid={isValid} errors={errors} />
      </form>
      <div className={`transition-opacity duration-200 fixed bottom-0 right-0 m-4 ${alert.visible ? 'opacity-100' : 'opacity-0'}`}>
        {alert.content}
      </div>
    </div>
  );
}


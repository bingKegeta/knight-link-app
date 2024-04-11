import React from "react";
import Link from "next/link";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  return (
    <div className=" h-[100vh] flex items-center justify-center m-auto bg-gradient-to-br from-base-100 to-indigo-800 via-neutral animate-gradient-x">
      <div className="p-8 card card-normal bg-base-100 fixed border-2 border-primary inline-block">
        <div className="card-actions w-full flex items-center justify-center relative">
          <h1 className="card-title ">Register!</h1>
          <Link href="/" className="absolute top-0 right-0">
            <button className="btn btn-square btn-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </Link>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;

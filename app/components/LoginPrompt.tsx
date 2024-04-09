import Link from "next/link";
import React from "react";

const LoginPrompt = () => {
  return (
    <div className="card w-96 bg-neutral text-neutral-content shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Login to see Events!</h2>
        <form>
          <div className="py-2">
            <label className="input input-bordered flex items-center gap-2 hover:input-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" className="grow" placeholder="Username" />
            </label>
          </div>

          <div className="py-2">
            <label className="input input-bordered flex items-center gap-2 hover:input-info">
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
              <input type="password" className="grow" value="password" />
            </label>
          </div>

          <div className="card-actions justify-center w-full py-4">
            {/* The next part likely is going to be it's own component for CSR shenanigans */}
            <button className="btn btn-primary  w-full">Log In</button>
            <Link className="link link-hover hover:link-info" href="/register">
              No account? Register Now!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPrompt;

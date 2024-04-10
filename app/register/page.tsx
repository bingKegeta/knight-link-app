import React from "react";
import RegisterPrompt from "../components/RegisterPrompt";

const RegisterPage = () => {
  return (
    <div className=" h-[100vh] flex items-center justify-center m-auto bg-gradient-to-br from-base-100 to-indigo-800 via-neutral animate-gradient-x">
      <div className="p-8 card card-normal bg-base-100 fixed border-2 border-primary inline-block">
        <RegisterPrompt />
      </div>
    </div>
  );
};

export default RegisterPage;

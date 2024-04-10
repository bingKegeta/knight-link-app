import React from "react";
import UniversityCard from "../components/UniversityCard";

const TestComponent = () => {
  return (
    <div className="w-[100vh] h-[100vh] flex items-center justify-center m-auto max-w-32">
      <div className="card card-normal bg-base-100 fixed border-2 border-primary">
        <UniversityCard
          name={"Man University"}
          description={
            "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        />
      </div>
    </div>
  );
};

export default TestComponent;

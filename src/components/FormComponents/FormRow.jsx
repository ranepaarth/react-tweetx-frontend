import React from "react";
import { IoMdInformationCircle } from "react-icons/io";

const FormRow = ({ children, error }) => {
  return (
    <div className="mb-4">
      <div
        className={`flex items-center bg-neutral-200/40 p-4 w-full rounded text-neutral-500 font-medium  ${
          error
            ? "outline outline-1 outline-red-600"
            : "focus-within:outline focus-within:outline-1 focus-within:outline-pink-400"
        }`}
      >
        {children}
      </div>
      <div className="text-xs mt-1 text-red-500 font-medium flex items-center gap-1">
        <span className={error ? "block" : "hidden"}>
          <IoMdInformationCircle />
        </span>
        <span>{error}</span>
      </div>
    </div>
  );
};

export default FormRow;

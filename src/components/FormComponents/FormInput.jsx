import React from "react";

const FormInput = ({ placeholder, register, type, autoFocus }) => {
  return (
    <input
      className="bg-transparent outline-none w-full capitalize text-sm"
      type={type}
      placeholder={placeholder}
      {...register}
      autoFocus={autoFocus}
    />
  );
};

export default FormInput;
